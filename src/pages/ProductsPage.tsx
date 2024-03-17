import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import productService from "../services/product";
import { Pagination } from "antd";
import { Product } from "../types/product";
import ProductItem from "../components/ProductItem";
const limit = 12;
const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", page],
    queryFn: () => productService.getList(limit, page),
  });
  const totalProducts = Number(data?.headers["x-total-count"] || 0);
  const changePage = (page: number) => {
    setPage(page);
  };
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
        {data?.data.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Pagination
          current={page}
          total={totalProducts}
          onChange={changePage}
          pageSize={limit}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
