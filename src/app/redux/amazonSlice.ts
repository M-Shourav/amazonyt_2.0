import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../../type";
interface InitialState {
  cart: ProductType[];
  favorite: ProductType[];
  useInfo: string | null;
}

const initialState: InitialState = {
  cart: [],
  favorite: [],
  useInfo: null,
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {},
});
