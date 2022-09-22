export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const increment = (amount) => ({
  type: INCREMENT,
  amount,
});
export const decrement = (amount) => ({
  type: DECREMENT,
  amount,
});
export const reset = () => ({
  type: RESET,
});
