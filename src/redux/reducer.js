import * as actionTypes from './actionTypes';

const cartFromLocalStorage = window.localStorage.getItem('cart');

const initialState = {
  cart: cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.data)
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== action.id)
      };
    default:
      return state;
  }
}

export default reducer;