import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./Reducer";
const AppContext = createContext();

const API = "https://dummyjson.com/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  cartProducts: [],
  singleData: {},
  quantity: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const data = await res.data.products;
      dispatch({ type: "GET_ALL_PRODUCTS", payload: data });
    } catch (err) {
      dispatch({ type: "API_ERROR" });
      console.error(err);
    }
  };

  //cartdata
  const addCartData = (cartData) => {
    dispatch({ type: "ADD_CART_DATA", payload: cartData });
  };
  //Minus
  const MinusCartData = (cartData) => {
    dispatch({ type: "MINUS", payload: cartData });
  };

  //Delete
  const DeleteData = (id, value) => {
    dispatch({ type: "DELETE", payload: { id, value } });
  };

  const getSingleData = (id) => {
    dispatch({ type: "GET_SINGLE_PRODUCT", payload: id });
  };
  //singla data
  // const getSingleData = async (apiUrl) => {
  //   dispatch({ type: "SET_LOADING" });
  //   try {
  //     const res = await axios.get(apiUrl);
  //     const data = await res.data;
  //     console.log(data);
  //     dispatch({ type: "GET_SINGLE_PRODUCTS", payload: data });
  //   } catch (err) {
  //     dispatch({ type: "API_ERROR" });
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        DeleteData,
        addCartData,
        getSingleData,
        MinusCartData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const ContextProvider = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, ContextProvider };
