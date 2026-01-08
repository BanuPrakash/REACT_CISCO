import { useContext } from "react"
import { CartContext } from "../../context/CartContextProvider"
import { Button } from "react-bootstrap";
import CartRow from "./CartRow";


export default function CartList() {
  let {checkout, items, total} = useContext(CartContext);
  return (
    <div>
      {
        items.map(product => <CartRow product={product} key={product.id}/>)
      }
    <div className="row">
        <div className="col-md-10">&nbsp;</div>
        <div className="col-md-2">Total: {total}</div>
    </div>
     <div className="row">
        <div className="col-md-10">&nbsp;</div>
        <div className="col-md-2">
          <Button onClick={() => checkout()}>Checkout</Button>
        </div>
    </div>
    </div>
  )
}
