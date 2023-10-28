import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import * as Icons from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { mutate } from "swr";

type Inputs = {
  name: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
};

const CreateProductsPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      data.price = Number(data.price);
      data.stock = Number(data.stock);
      await axios.post("api/v1/product/", data);
      mutate("api/v1/product/");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
        <h1 className="font-medium text-lg">Add Product</h1>
      </div>
      <div className="mt-8  ">
        <form
          className="flex flex-col items-center mx-auto w-full  max-w-md "
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-sm font-medium">Product Name</label>
          <input
            className="border-2 border-black rounded-full px-4 py-2 text-sm font-semibold min-w-full mb-3"
            type="text"
            placeholder="Product Name"
            {...register("name", { required: true })}
          />
          <label className="text-sm font-medium">Product Price</label>
          <input
            className="border-2 border-black rounded-full px-4 py-2 text-sm font-semibold min-w-full mb-3"
            type="number"
            placeholder="Product Price"
            {...register("price", { required: true })}
          />
          <label className="text-sm font-medium">Product Description</label>
          <input
            className="border-2 border-black rounded-full px-4 py-2 text-sm font-semibold min-w-full mb-3"
            type="text"
            placeholder="Product Description"
            {...register("description", { required: true })}
          />
          <label className="text-sm font-medium">Product Image Link</label>
          <input
            className="border-2 border-black rounded-full px-4 py-2 text-sm font-semibold min-w-full mb-3"
            type="text"
            placeholder="Product Image"
            {...register("image_url", { required: true })}
          />
          <label className="text-sm font-medium">Product Stock</label>
          <input
            className="border-2 border-black rounded-full px-4 py-2 text-sm font-semibold min-w-full mb-3"
            type="number"
            placeholder="Product Stock"
            {...register("stock", { required: true })}
          />
          <input
            type="submit"
            className="bg-black text-white font-semibold rounded-full px-6 py-2 text-sm mb- hover:bg-gray-600"
          />
        </form>
      </div>
    </main>
  );
};

export default CreateProductsPage;
