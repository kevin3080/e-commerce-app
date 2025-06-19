export const BASE_URL_API = import.meta.env.VITE_BASE_API_URL
export const GET_PRODUCTS = `${BASE_URL_API}/products`
export const GET_PRODUCT_BY_ID = (productId: string) =>
  `${GET_PRODUCTS}/${productId}`
