import DetailProducts from "../components/DetailProducts";
import { useParams } from "react-router-dom";
import productService from "../services/product";
import { useQuery } from "@tanstack/react-query";

const DetailPage = () => {
  const param = useParams();
  const id = Number(param.id);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productService.getDetail(id),
  });
  if (isLoading) return <div>loading</div>;
  if (isError) return <div>loading</div>;

  return (
    <div className="mt-[70px]">
      <DetailProducts product={data?.data} />
      <div className="mt-20">
        <h1 className="text-5xl font-bold">Other Products</h1>
        <div className="grid grid-cols-4 gap-8 mt-8"></div>
      </div>
    </div>
  );
};

export default DetailPage;
