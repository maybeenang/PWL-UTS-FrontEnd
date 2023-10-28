import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import * as Icons from "react-icons/fa";
import { CartContextValue, CartItem, useCart } from "../hooks/useCart";

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   stock: number;
// }

// type CartContextValue = {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (item: CartItem) => void;
//   clearCart: () => void;
// };

const Header = () => {
  const navigate = useNavigate();

  const { cartItems }: CartContextValue = useCart();

  return (
    <header className="bg-white py-4 px-6 rounded-full text-sm flex justify-between items-center">
      <h1
        className="font-semibold cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        E-Commerce
      </h1>
      <div className="flex items-center">
        <Button
          onClick={() => {
            navigate("/cart");
          }}
        >
          {cartItems?.length ?? 0}
          <Icons.FaShoppingCart className="inline-block ml-2" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
