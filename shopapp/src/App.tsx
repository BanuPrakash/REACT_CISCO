import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"
import ProductList from "./components/product/ProductList"
import Default from "./components/Default"

// note lazy loaded components should be only after all regular imports
const CartList =  lazy(() => import("./components/cart/CartList"))
const Details = lazy(() => import("./components/product/Details"))

function App() {
 
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
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  )
}

export default App
