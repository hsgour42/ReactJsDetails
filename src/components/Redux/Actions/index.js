import { INCREAMENT, DECREAMENT } from "../Constants/index";
import { getProduct } from "./Services/service";

export const increament = (num, name) => {
  return async (dispatch) => {
    const data = await getProduct(num);
    dispatch(setIncreament(num, name, data));
  };
};

export const setIncreament = (num, name, data) => {
  return { type: INCREAMENT, payload: { num, name, data } };
};

export const decreament = (num, name) => {
  return async (dispatch) => {
    const data = await fetch("https://fakestoreapi.com/products/" + num)
      .then((res) => res.json())
      .then((json) => json);
    dispatch(setDecreament(num, name, data));
  };
};

export const setDecreament = (num, name, data) => {
  return { type: DECREAMENT, payload: { num, name, data } };
};
