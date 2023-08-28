import { useDispatch } from "react-redux";
import { productReducer } from "./reducers/productReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
  },
});

// ==> typescript

//cấu hình type cho các state mà mình sẽ lấy ở component
export type RootState = ReturnType<typeof store.getState>;

//cấu hình dispatch
export type AppDispatch = typeof store.dispatch;

//khởi tạo ra useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
