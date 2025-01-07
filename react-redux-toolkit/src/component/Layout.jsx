import React from "react";
import { Outlet } from "react-router-dom";
import Navb from "./Navbar";
import {Provider} from 'react-redux';
import store from '../component/store/store'


const Layout = ()=>{
    return(
      <Provider store={store}>
        <div className="w-100">
          <Navb/>
          <main>
            <Outlet/>
          </main>
        </div>
      </Provider>
    )
}
export default Layout;