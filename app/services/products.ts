import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from '@/constants/url-api'
import axios from 'axios'
import type { Products } from './definitions/products'

export async function getProducts(): Promise<Products[]> {
  try {
    const res: Response = await fetch(GET_PRODUCTS)
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`)
    }
    const data: Products[] = await res.json()
    return data
  } catch (err) {
    console.error(err)
    return []
  }
}

export async function getProductsById(id: string) {
  try {
    const rest = await axios.get(GET_PRODUCT_BY_ID(id))
    return rest.data
  } catch (error) {
    console.error(error)
    return []
  }
}
