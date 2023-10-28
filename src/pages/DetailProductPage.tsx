import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import * as Icons from "react-icons/fa";
import ButtonBlack from "../components/ButtonBlack";
import defaultProductImage from "../assets/deafaultProducts.png";
import useProduct from "../hooks/useProduct";
import useImageValid from "../hooks/useImageValid";
import { axiosInstance } from "../helpers/axios";
import { mutate } from "swr";

const DetailProductPage = () => {
  const navigate = useNavigate();

  const { id = "" } = useParams();

  const { data, isLoading, error } = useProduct({ id: id });

  const isImageValid = useImageValid(data?.image_url);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete("api/v1/product/", {
        data: { id: Number(id) },
      });
      await mutate("api/v1/product/");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <main className="bg-white rounded-3xl mt-2 px-6 py-6 ">
          <div className="flex justify-between items-center">
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              <Icons.FaArrowLeft className="inline-block ml-2" />
            </Button>

            <h1 className="font-medium text-lg">Detail Product</h1>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete
                <Icons.FaRegWindowClose className="inline-block ml-2" />
              </Button>

              <ButtonBlack
                onClick={() => {
                  navigate("/edit-product/" + id + "");
                }}
              >
                Edit
                <Icons.FaEdit className="inline-block ml-2" />
              </ButtonBlack>
            </div>
          </div>
          <div className="mt-8  flex justify-center">
            <div className="bg-gray-100 rounded-lg mb-4 object-contain flex justify-center">
              <img
                src={isImageValid ? data?.image_url : defaultProductImage}
                className="object-contain w-44 h-40"
              />
            </div>

            {/* create full detail products */}
            <div className="ml-4 max-w-sm">
              <h1 className="font-medium text-lg text-left">{data?.name}</h1>
              <p className="text-sm">{`Rp.${data?.price}`}</p>
              <p className="text-sm">{data?.stock}</p>
              <p className="text-sm">{data?.description}</p>
              <div className="mt-4 flex -ml-4">
                <Button onClick={() => {}} className="text-xs mr-2">
                  Add to Cart
                  <Icons.FaShoppingCart className="inline-block ml-2" />
                </Button>

                <ButtonBlack onClick={() => {}}>
                  Buy Now
                  <Icons.FaShoppingCart className="inline-block ml-2" />
                </ButtonBlack>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default DetailProductPage;
