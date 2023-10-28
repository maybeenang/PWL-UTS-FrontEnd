import axios from "axios";
import useSWR from "swr";

const useProducts = () => {
  const fethcer = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR("/api/v1/product/", fethcer);

  return { data, error, isLoading };
};

export default useProducts;
