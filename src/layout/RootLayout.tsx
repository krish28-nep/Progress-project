import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Navbar";

const RootLayout:React.FC=()=>{
    return(<>
    <header>
        <NavBar/>
    </header>
    <Outlet/></>
    )
}

export {RootLayout}