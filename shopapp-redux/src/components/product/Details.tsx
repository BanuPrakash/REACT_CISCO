
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import type Product from '../../models/Product';
import axios from 'axios';

// http://localhost:3000/details/4
// 4 is Path Parameter
export default function Details( ) {
  let [product, setProduct] = useState<Product>();
  let {id} = useParams();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + id)
    .then(response => setProduct(response.data));
  }, [id]);
  return (
    <div>
      <h1>Details</h1>
      {
        product && (
          <>
            <img src = {product.image} /> <br />
            Name: {product.title} <br />
          </>
        )
      }  
    </div>
  )
}
