import { createAction, createReducer, current } from "@reduxjs/toolkit";
import { IProduct } from "../type";

//init state
interface IInitStateProduct {
  listProduct: IProduct[];
}

const initState: IInitStateProduct = {
  listProduct: [],
};
//action
export const getProductAction = createAction<IProduct[]>("getAll/product");

//reducer

//nhận vào 2 tham số
export const productReducer = createReducer(initState, (builder) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  builder.addCase(getProductAction, (state: IInitStateProduct, action) => {
    console.log("state hiện tại", current(state));
    console.log("action", action);
    state.listProduct = action.payload;
  });
});
