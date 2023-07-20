const Reducer = (state, action) => {
  const add = (data) => {
    const check = state.cartProducts.find((pr) =>
      pr.id === data.id ? true : false
    );

    const newProducts = state.products.map((pd) => {
      if (pd.id === data.id) {
        pd.stock = pd.stock - 1;
        return pd;
      }
      return pd;
    });

    // let newSingleProduct = newProducts.find((pd) => pd.id === data.id);

    const newValue = state.cartProducts.reduce((prev, next) => {
      return prev + next.qty;
    }, 1);
    return {
      ...state,
      products: newProducts,

      cartProducts: check
        ? state.cartProducts.map((itm) =>
            itm.id === data.id
              ? {
                  ...itm,
                  qty: itm.qty + 1,
                  stock: Number(itm.stock) - 1,
                }
              : itm
          )
        : [
            ...state.cartProducts,
            { ...data, qty: 1, stock: Number(data.stock) },
          ],
      quantity: newValue,
    };
  };

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
    case "GET_SINGLE_PRODUCT":
      let newSingleProduct = state.products.find(
        (p) => p.id === action.payload
      );
      return {
        ...state,
        isLoading: false,
        singleData: newSingleProduct,
      };

    case "ADD_CART_DATA":
      return add(action.payload);

    //Minus
    case "MINUS":
      //Check if the product in cart is already
      const minus_check = state.cartProducts.find((pr) =>
        pr.id === action.payload.id ? true : false
      );

      const minus_newProducts = state.products.map((pd) => {
        if (pd.id === action.payload.id) {
          pd.stock = pd.stock + 1;
          return pd;
        }
        return pd;
      });
      const minus_newValue = state.cartProducts.reduce((prev, next) => {
        return prev + next.qty;
      }, -1);
      return {
        ...state,
        products: minus_newProducts,

        cartProducts:
          minus_check &&
          state.cartProducts.map((itm) =>
            itm.id === action.payload.id
              ? {
                  ...itm,
                  qty: itm.qty - 1,
                  stock: Number(itm.stock) + 1,
                }
              : itm
          ),

        quantity: minus_newValue,
      };

    //Delete
    case "DELETE":
      const filterProducts = state.cartProducts.filter(
        (p_data) => p_data.id !== action.payload.id
      );

      const del_newProducts = state.products.map((pd) => {
        if (pd.id === action.payload.id) {
          pd.stock = pd.stock + action.payload.value;
          return pd;
        }
        return pd;
      });
      const del_newValue = filterProducts.reduce((prev, next) => {
        return prev + next.qty;
      }, 0);
      return {
        ...state,
        products: del_newProducts,
        cartProducts: filterProducts,

        quantity: del_newValue,
      };

    default:
      return state;
  }
};

export default Reducer;
