import { useNavigate } from "react-router-dom";
import defaultProductImage from "../assets/deafaultProducts.png";
import useImageValid from "../hooks/useImageValid";
import { CartContextValue, CartItem, useCart } from "../hooks/useCart";
import Button from "./Button";

const CardCart: React.FC<{
  product: CartItem;
}> = ({ product }) => {
  const navigate = useNavigate();
  const isImageValid = useImageValid(product.image_url);

  const { cartItems, removeFromCart }: CartContextValue = useCart() || {
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
  };

  return (
    <div
      className="bg-white border-2 p-4 rounded-2xl col-auto hover:bg-gray-100 hover:border-gray-300 transition-all duration-150 ease-out hover:ease-in cursor-pointer"
      onClick={() => {
        navigate(`/detail-product/${product?.id}`);
      }}
    >
      <div className="bg-gray-100 rounded-lg mb-4 object-contain flex justify-center">
        <img
          src={isImageValid ? product.image_url : defaultProductImage}
          className="object-contain w-36 h-40"
        />
      </div>

      <h1 className="text-lg font-semibold mb-1 truncate">{product?.name}</h1>
      <p className="text-xs">Rp. {product?.price}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs">Amount : {product?.quantity}</p>
        <Button
          className="text-xs"
          onClick={(event) => {
            event.stopPropagation();
            removeFromCart(product);
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CardCart;
