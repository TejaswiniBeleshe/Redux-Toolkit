import React from "react"
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useDispatch } from "react-redux";
import { del } from "./store/cartSlice";
const Cart = ()=>{
    const dispatch = useDispatch()
    let allProducts = useSelector(state=>state.cart)
    const removeItem = (id)=>{
        dispatch(del(id))

    }
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
      <Button variant="primary" onClick={()=>removeItem(product.id)}>Remove</Button>
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