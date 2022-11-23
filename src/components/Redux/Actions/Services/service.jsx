export const getProduct = async (num) => {
  const data = await fetch("https://fakestoreapi.com/products/" + num)
    .then((res) => res.json())
    .then((json) => json);
  return data;
};
