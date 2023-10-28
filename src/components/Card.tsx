import { useNavigate } from "react-router-dom";
import defaultProductImage from "../assets/deafaultProducts.png";
import { Product } from "../models/Product";

const Card: React.FC<{
  product: Product;
}> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white border-2 p-4 rounded-2xl col-auto hover:bg-gray-100 hover:border-gray-300 transition-all duration-150 ease-out hover:ease-in cursor-pointer"
      onClick={() => {
        navigate(`/detail-product/${product?.id}`);
      }}
    >
      <img src={defaultProductImage} className="bg-gray-100 rounded-lg mb-4" />
      <h1 className="text-lg font-semibold mb-1">{product?.name}</h1>
      <p className="text-sm mb-4">Rp. {product?.price}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs">Stock : {product?.stock}</p>
        <button
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="bg-black text-white rounded-full px-4 py-2 font-semibold border-2 border-black text-xs hover:bg-white hover:text-black transition-all "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
