// import React from 'react';
import { useEffect } from "react";
import "./css/loader.css";




function Loader({theme}) {
    return (
        <div className="container_loader" id={theme === 'dark' ? "loader_dark": ""}>
            <p><span>Uploading</span>, please wait..</p>
            <div id="loader">
                <div className="loader"></div>
            </div>
        </div>
    )
}


export default Loader;