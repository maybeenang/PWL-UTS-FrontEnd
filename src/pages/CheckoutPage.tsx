import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { axiosInstance } from "../helpers/axios";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();

  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      navigate("/");
      return;
    }

    setItems(cartItems);

    const getTotalPriceFromServer = async () => {
      const ids = [];

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        for (let j = 0; j < item.quantity; j++) {
          ids.push(item.id);
        }
      }

      const totalPriceDto = await axiosInstance.post(
        "/api/v1/product/sum-price",
        {
          id: ids,
        }
      );

      console.log(totalPriceDto.data.pro);

      setTotalPrice(totalPriceDto.data.pro);
    };

    getTotalPriceFromServer();

    return () => {
      clearCart();
    };
  }, []);

  return (
    <>
      <main className="bg-white rounded-3xl mt-2 px-6 py-6 ">
        <div className="bg-gray-100 max-w-md mx-auto divide-x-2 px-5 py-36">
          <h1 className="font-medium text-lg text-center">Invoice</h1>
          <div className="flex justify-between items-center mt-3 mb-3">
            <p className="text-xs">Product</p>
            <p className="text-xs">Price</p>
            <p className="text-xs">Quantity</p>
            <p className="text-xs">Total</p>
          </div>

          {items.length === 0 ? (
            <p className="text-center text-lg">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div className="flex justify-between items-center" key={item?.id}>
                <div className="w-36 ">
                  <p className="text-xs ">{item.name}</p>
                </div>
                <div className="w-36 ">
                  <p className="text-xs text-center">Rp. {item.price}</p>
                </div>
                <div className="w-36 ">
                  <p className="text-xs text-center">{item.quantity}</p>
                </div>
                <div className="w-36 ">
                  <p className="text-xs text-right ">
                    Rp. {item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))
          )}
          <div className="flex justify-between items-center mt-3 mb-3">
            <p className="text-xs">Total</p>
            <p className="text-xs text-right">Rp. {totalPrice}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;
