import React from "react";
import ContentSingleItem from "../ContentSingleItem/ContentSingleItem";

import './MainPageContent.css';



const MainPageContent = ({data}:{data:string[]}) => {
    return(
        <div className="content">
            <div className="content-items">
                {data.map(item=>(
                    <div className="content-item">
                        <ContentSingleItem item = {item}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPageContent;