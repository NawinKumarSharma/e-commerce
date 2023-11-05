'use client'
import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string,
  description: string,
  currency: string,
  price: number,
  image: any,
}

const AddToBag = ({ currency, description, image, name, price }: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: 'fdf',
  }

  return (
    <Button onClick={() => {
      addItem(product), handleCartClick();
    }}>
      Add to Cart
    </Button>
  )
}

export default AddToBag
