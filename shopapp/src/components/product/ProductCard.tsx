import type Product from '../../models/Product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// interface and type can be used to declare shape of object
type Props = {
  product: Product
}

// interface Props {
//   product: Product
// }
export default function ProductCard({product} : Props) {
  return (
    <div className='col-md-4 my-2'>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        Price : {product.price} &nbsp;
        <Button>Add</Button>
      </Card.Footer>
    </Card>
    </div>
  )
}
