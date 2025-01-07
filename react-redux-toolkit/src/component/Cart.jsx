import React from "react"
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const Cart = ()=>{
    let allProducts = useSelector(state=>state.cart)

    const cards = allProducts.map((product,i)=>(
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
      <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
      </Card.Footer>
      </Card>
      </div>
      ))
    return(
        <>
         <h2>Cart</h2>
         <div className="row">
         {cards}
         </div>
        </>
    )
}
export default Cart