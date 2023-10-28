import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import * as Icons from "react-icons/fa";
import { CartContextValue, CartItem, useCart } from "../hooks/useCart";
import CardCart from "../components/CardCart";

const CartPage = () => {
  const navigate = useNavigate();

  const { cartItems }: CartContextValue = useCart();

  return (
    <main className="bg-white rounded-3xl mt-2 px-6 py-6 ">
      <div className="flex justify-between items-center">
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          <Icons.FaArrowLeft className="inline-block ml-2" />
        </Button>
        <h1 className="font-medium text-lg">Your Cart</h1>
        <div>
          <Button
            onClick={async () => {
              if (cartItems.length === 0) {
                // if cart is empty, then alert
                alert("Your cart is empty");
                return;
              }

              // confirm for chekout using alert
              const confirm = window.confirm("Are you sure want to checkout?");

              if (confirm) {
                // if confirm is true, then navigate to checkout page
                navigate("/checkout");
              }
            }}
          >
            Checkout
            <Icons.FaArrowRight className="inline-block ml-2" />
          </Button>
        </div>
      </div>
      <div className="mt-8 grid gap-2 md:grid-cols-4 grid-cols-2 ">
        {cartItems.length > 0 ? (
          cartItems.map((item: CartItem) => (
            <CardCart product={item} key={item.id} />
          ))
        ) : (
          <p className="text-center text-lg">Your cart is empty</p>
        )}
      </div>
    </main>
  );
};

export default CartPage;
