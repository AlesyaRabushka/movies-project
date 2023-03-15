import React, { ReactNode } from "react";
import Nav from "../components/Nav/Nav";

import './Layout.css'

interface Props {
    children: ReactNode
}


const Layout = ({children, ...props}: Props) =>{
    return (
        <div className="layout">
            <Nav/>
            <div>{children}</div>
        </div>
    );
};

export default Layout;