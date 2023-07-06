import React from "react";
import {Outlet} from 'react-router-dom';
import { useSelector } from "react-redux";
import LoginPage  from '../src/Components/LoginPage';
const ProtectedRoutes=()=>{
   const isAuth= useSelector((state) => state.userSlice.isAuth ) 
   console.log("isAuth",isAuth) ;
   return ( 
       isAuth?<Outlet/>:<LoginPage/> 
   )
}
export default ProtectedRoutes;