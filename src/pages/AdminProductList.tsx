import React, { useContext, useEffect, useState } from "react";
import { Product } from "../types/product";
import productService from "../services/product";
import { Link, useSearchParams } from "react-router-dom";
import { spinnerCT } from "../App";
import Pagination from "../components/Pagination";
const limit = 10;
const AdminProductList = () => {
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
    <div className="bg-white  rounded-xl p-5">
      <div className="mb-10">
        <h2 className="text-xl font-semibold">Admin Product List</h2>
      </div>
      <Link className="mb-3" to="/admin/create-product">
        <button className="px-3 h-10 bg-green-600 hover:bg-green-400 rounded-md text-black font-semibold">
          Add new products
        </button>
      </Link>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Image</th>
            <th className="w-[300px] text-start">Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>
                <img
                  className="w-20 h-20 object-cover"
                  src={product.thumbnail}
                  alt=""
                />
              </td>
              <th>{product.title}</th>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <p className="overflow-hidden text-ellipsis h-12">
                  {product.description}
                </p>
              </td>
              <td>
                <Link to="">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Edit
                  </button>
                </Link>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-10">
        <Pagination page={currentPage} totalPage={totalPage} />
      </div>
    </div>
  );
};

export default AdminProductList;
