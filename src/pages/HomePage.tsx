import Button from "../components/Button";
import * as Icons from "react-icons/fa";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { Product } from "../models/Product";

const HomePage = () => {
  const { data, isLoading, error } = useProducts();

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <main className="bg-white rounded-3xl mt-2 px-6 py-6 ">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-lg">Products</h1>
            <div>
              <Button
                onClick={() => {
                  navigate("/create-product");
                }}
              >
                Add product
                <Icons.FaPlus className="inline-block ml-2" />
              </Button>
            </div>
          </div>
          <div className="mt-8 grid gap-2 md:grid-cols-4 grid-cols-2 ">
            {data.map((product: Product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default HomePage;
