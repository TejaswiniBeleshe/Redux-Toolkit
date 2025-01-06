import React,{useState,useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const Product = ()=>{
    const [products,getProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(data=>data.json()).then(result=> getProducts(result))

    },[])
    
    const cards = products.map((product,i)=>(
        <div className="col-sm-4 col-md-3 ">
        <Card style={{ width: '18rem'}} key={product.id} className="h-100">
      <Card.Img variant="top" src={product.image} style={{height:'12rem'}} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         INR:{product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{backgroundColor:'white'}}>
      <Button variant="primary">Add To Cart</Button>
      </Card.Footer>
      </Card>
      </div>
      ))
    return(
        <div>
         product component
         <div className="row">
            {cards}
         </div>

         
        </div>
    )
}

export default Product