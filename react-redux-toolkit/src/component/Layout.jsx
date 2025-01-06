import { Button } from "bootstrap";
import React from "react";
import { Outlet } from "react-router-dom";
import Navb from "./Navbar";


const Layout = ()=>{
 

    return(
        <div className="w-100">
          <Navb/>
            <Outlet/>
        </div>
    )
}
export default Layout