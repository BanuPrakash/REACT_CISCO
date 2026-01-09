
import { useDispatch } from 'react-redux';
import type CartItem from '../../models/CartItem'
import { Button } from 'react-bootstrap';
import { increment } from '../../redux/cartSlice';


type Props = {
  product: CartItem
}
export default function CartRow({product}:Props) {
  let {id, title, image, price, qty, amount} = product;
  let dispatch = useDispatch();
  return (
    <div className='row'>  
      <div className='col-md-2'>
        <img src={image} style={{"width":"50px"}}/>
      </div>
      <div className='col-md-2'>
          {title}
      </div>
      <div className='col-md-4'>
          <Button> - </Button>
            &nbsp;
            {qty}
            &nbsp;
           <Button onClick={() => dispatch(increment(id))}> + </Button>
      </div>
      <div className='col-md-2'>
        Price : {price}
      </div>
      <div className='col-md-2'>
        Amount: {amount}
      </div>
    </div>
  )
}
