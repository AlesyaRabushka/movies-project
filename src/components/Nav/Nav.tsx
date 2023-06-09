import React from 'react'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'
import ToolTip from '../ToolTip/ToolTip'

import './Nav.css'
import * as data from "./links.json"
const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links




type MyLink ={
    label: string;
    href: string;
};

// to navigate through pages
// const navigate = useNavigate();

const Nav: React.FC<{}> = () => {
    return (
        <nav className="navbar">
            <div className='logo-container'>
                <span className='logo'>Кинофильмы</span>
            </div>
            <div className='links-container'>
                {links.map((link: MyLink) => {
                    return (
                        <div key ={link.href} className="link">
                            <Link to={link.href}>
                                {link.label}
                            </Link>
                        </div>
                    )
                })}

            </div>
            <div className='searchbar-container'>
                <SearchBar/>
            </div>
            <div className='tooltip'>
                <ToolTip/> 
            </div>
            
            
        </nav>
    );
}

export default Nav;