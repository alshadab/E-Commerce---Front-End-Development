const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "GET_UNIQUE_DATA":
      let data = state.products;

      let newData = data.map((element) => {
        return element[action.payload];
      });

      return {
        ...state,
        categoryProducts: newData,
      };

    default:
      return state;
  }
};

export default Reducer;
