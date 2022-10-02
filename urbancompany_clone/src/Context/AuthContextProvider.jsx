import React, { createContext, useState } from "react";

export const CartContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return { name: "", loading: true, isAuth: false, error: "" };
    case "Success":
      return { name: action.payload, loading: false, isAuth: true, error: "" };
    case "Failure":
      return {
        loading: false,
        loading: false,
        isAuth: false,
        error: action.payload,
      };
    case "Noinput":
      return {
        name: "",
        loading: false,
        isAuth: false,
        error: "Please Enter a Valid Mobile number",
      };
    case "NoData":
      return {
        name: "",
        loading: false,
        isAuth: false,
        error: "Please Enter your full Name",
      };
    case "invalid":
      return {
        name: "",
        loading: false,
        isAuth: false,
        error: action.payload,
      };
    case "reset_name":
      return {
        name: action.payload,
        loading: false,
        isAuth: true,
        error: "",
      };

    case "reset":
      return intialState;
  }
  Default: return state;
};
const intialState = { name: "", loading: false, isAuth: false, error: "" };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, intialState);

  <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartContextProvider;
