import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Product from './component/Product'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Dashboard from "./component/Dashboard";
import Cart from "./component/Cart";
import Layout from "./component/Layout"
function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path="product" element={<Product/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>

      </Route>
    )
  )

  return (
    <div className='App'>
    <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
