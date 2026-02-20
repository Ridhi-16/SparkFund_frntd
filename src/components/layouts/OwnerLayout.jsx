import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import OwnerHeader from "./OwnerHeader";
import { MoonLoader } from "react-spinners";
import ChatWidget from "../user/chat/ChatWidget";
// import CropBubble from "../pages/CropBubble";


export default function OwnerLayout(){
    
    let isLogin=sessionStorage.getItem("isLogin")
    let role=sessionStorage.getItem("role")
    let nav=useNavigate()
    useEffect(()=>{
        if(!isLogin || role!="owner"){
            toast.error("Please login to access this page")
            nav("/login")
        }
    },[isLogin])


    


    return(
        <>
        
        <OwnerHeader/>
        <Outlet/>
                <ChatWidget/>
        
         {/* <CropBubble/> */}
        {/* <Footer/> */}
        </>
    )
}