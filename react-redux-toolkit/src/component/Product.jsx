import React,{useState,useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useDispatch } from "react-redux";
import {add} from '../component/store/cartSlice'
const Product = ()=>{
    const [products,getProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(data=>data.json()).then(result=> getProducts(result))

    },[])

    const addToCart = (product)=>{
      // dispatch an add action to do so use useDispatch
      dispatch(add(product))
    }
    
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
      <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
      </Card.Footer>
      </Card>
      </div>
      ))
    return(
        <div>
        <h1>product component</h1>
         <div className="row">
            {cards}
         </div>
        </div>
    )
}

export default Product