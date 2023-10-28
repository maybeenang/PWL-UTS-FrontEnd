import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import * as Icons from "react-icons/fa";
import ButtonBlack from "../components/ButtonBlack";

const CreateProductsPage = () => {
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

        <h1 className="font-medium text-lg">Add Product</h1>
        <div>
          <ButtonBlack onClick={() => {}}>
            Submit
            <Icons.FaPlus className="inline-block ml-2" />
          </ButtonBlack>
        </div>
      </div>
      <div className="mt-8  ">
        <form className="flex flex-col items-center mx-auto w-full  max-w-md ">
          <label className="text-sm font-medium">Product Name</label>
          <input
            className="border-2 border-black rounded-full px-4 py-2 text-sm font-semibold min-w-full mb-3"
            type="text"
            placeholder="Product Name"
          />
          <label className="text-sm font-medium">Product Price</label>
          <input
            className="border-2 border-black rounded-full px-4 py-2 text-sm font-semibold min-w-full mb-3"
            type="text"
            placeholder="Product Price"
          />
          <label className="text-sm font-medium">Product Description</label>
          <input
            className="border-2 border-black rounded-full px-4 py-2 text-sm font-semibold min-w-full mb-3"
            type="text"
            placeholder="Product Description"
          />
          <label className="text-sm font-medium">Product Image Link</label>
          <input
            className="border-2 border-black rounded-full px-4 py-2 text-sm font-semibold min-w-full mb-3"
            type="text"
            placeholder="Product Image"
          />
          <label className="text-sm font-medium">Product Stock</label>
          <input
            className="border-2 border-black rounded-full px-4 py-2 text-sm font-semibold min-w-full mb-3"
            type="text"
            placeholder="Product Stock"
          />
        </form>
      </div>
    </main>
  );
};

export default CreateProductsPage;
