import type Product from "../../models/Product";
import ProductCard from "@/components/ProductCard";


// SSR 
export default async function ProductList() {
    // let res = await fetch("https:fakestoreapi.com/products?limit=5");
    const res = await fetch("http://localhost:3000/api/products");
    const products:Product[] = await res.json();
    
    return (
    <div className="row">
      {
        products.map(product => <ProductCard product={product} key={product.id}/>)
      }
    </div>
  )
}
