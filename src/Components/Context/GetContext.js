import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./Reducer";
const AppContext = createContext();

const API = "https://dummyjson.com/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  categoryProducts: [],
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
  const getUniqueData = (type) => {
    dispatch({ type: "GET_UNIQUE_DATA", payload: type });
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getUniqueData }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const ContextProvider = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, ContextProvider };
