import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"
import ProductList from "./components/product/ProductList"
import Default from "./components/Default"
import Address from "./components/cart/Address"
// import axios from "axios"
// note lazy loaded components should be only after all regular imports
const CartList =  lazy(() => import("./components/cart/CartList"))
const Details = lazy(() => import("./components/product/Details"))

function App() {
  // axios.defaults.headers.common['Authorization'] 
    // = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
  return (
    <div className="container">
      <NavbarComponent />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={
          <Suspense fallback={<div>loading cart....</div>}>
              <CartList />
          </Suspense>
          } />
        <Route path="/details/:id" element={
           <Suspense fallback={<div>loading details....</div>}>
              <Details />
           </Suspense>
          } />
        <Route path="/address" element={<Address />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  )
}

export default App
