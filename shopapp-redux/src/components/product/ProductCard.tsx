
import type Product from '../../models/Product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';


// interface and type can be used to declare shape of object
type Props = {
  product: Product
}

// interface Props {
//   product: Product
// }
export default function ProductCard({product} : Props) {
  let dispatch = useDispatch();
  let {id, image,title, price} = product;
  return (
    <div className='col-md-4 my-2'>
    <Card style={{ width: '18rem' }} >
      <Link to ={`/details/${id}`}>
          <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        Price : {price} &nbsp;
        <Button onClick={() => dispatch(addToCart({...product}))}>Add</Button>
      </Card.Footer>
    </Card>
    </div>
  )
}
