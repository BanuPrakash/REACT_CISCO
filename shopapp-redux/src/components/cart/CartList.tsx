
import { Button } from "react-bootstrap";
import { useAppSelector } from "../../redux/store";
import CartRow from "./CartRow";
import { useDispatch } from "react-redux";
import { checkout } from "../../redux/cartSlice";

export default function CartList() {
  let dispatch = useDispatch();
  let {items, total} = useAppSelector(state => state.cart)
  return (
    <div>
    {
      items.map(item => <CartRow product={item} key={item.id}/>)
    }
    <div className="row">
        <div className="col-md-10">&nbsp;</div>
        <div className="col-md-2">Total: {total}</div>
    </div>
     <div className="row">
        <div className="col-md-10">&nbsp;</div>
        <div className="col-md-2">
          <Button onClick={() => dispatch(checkout())}>Checkout</Button>
        </div>
    </div>
    </div>
  )
}
