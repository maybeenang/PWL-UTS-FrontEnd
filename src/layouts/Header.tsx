import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import * as Icons from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white py-4 px-6 rounded-full text-sm flex justify-between items-center">
      <h1 className="font-semibold">E-Commerce</h1>
      <div className="flex items-center">
        <Button
          onClick={() => {
            navigate("/cart");
          }}
        >
          100
          <Icons.FaShoppingCart className="inline-block ml-2" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
