import axios from "axios";
import useSWR from "swr";

interface UseProductProps {
  id: string;
}

const useProduct = ({ id }: UseProductProps) => {
  const fethcer = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR(
    `/api/v1/product/?productId=${id}`,
    fethcer
  );

  return { data, error, isLoading };
};

export default useProduct;
