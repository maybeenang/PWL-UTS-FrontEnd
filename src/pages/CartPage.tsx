import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import * as Icons from "react-icons/fa";

const CartPage = () => {
  const navigate = useNavigate();

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
          <Button onClick={() => {}}>
            Checkout
            <Icons.FaArrowRight className="inline-block ml-2" />
          </Button>
        </div>
      </div>
      <div className="mt-8 grid gap-2 md:grid-cols-4 grid-cols-2 ">
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </main>
  );
};

export default CartPage;
