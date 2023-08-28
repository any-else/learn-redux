import axios from "axios";
import React from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import ProductList from "../../components/ProductList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../../redux/reducers/productReducer";
import { RootState } from "../../redux/store";

const ManageProductPage: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const cancel = CancelToken.source();
    const handleCallProduct = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products", {
          cancelToken: cancel.token,
        });
        console.log("response", response);
        dispatch(getProductAction(response.data));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.log("error", error);
        }
      }
    };
    handleCallProduct();
    return () => {
      cancel.cancel("cancel request");
    };
  }, [dispatch]);
  //lấy nó
  const listProduct = useSelector(
    (state: RootState) => state.productReducer.listProduct
  );

  console.log("listProduct", listProduct);

  return (
    <div>
      <h2>Quản lý sản phẩm </h2>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default ManageProductPage;
