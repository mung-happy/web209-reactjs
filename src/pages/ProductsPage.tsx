import { useContext, useEffect, useState } from "react";
import productService from "../services/product";
import { Product } from "../types/product";
import ProductItem from "../components/ProductItem";
import { spinnerCT } from "../App";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
const limit = 12;
const ProductsPage = () => {
  const [dispatch] = useContext(spinnerCT);
  const [urlParams] = useSearchParams();
  const [totalProduct, setTotalProduct] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const currentPage = Number(urlParams.get("page") || 1);
  useEffect(() => {
    dispatch({ type: "show" });
    productService.getList(limit, currentPage).then((response) => {
      setProducts(response.data);
      setTotalProduct(response.headers["x-total-count"]);
      dispatch({ type: "close" });
    });
  }, [currentPage]);
  const totalPage = Math.ceil(totalProduct / limit);
  return (
    <div className="container mx-auto mt-20">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-5xl font-bold">Popular Products</h2>
          <p className="text-lg my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-8">
        {products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Pagination totalPage={totalPage} page={currentPage} />
      </div>
    </div>
  );
};

export default ProductsPage;
