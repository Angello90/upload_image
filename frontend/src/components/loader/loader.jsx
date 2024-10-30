// import React from 'react';
import { useEffect } from "react";
import "./css/loader.css";




function Loader() {
    return (
        <div className='container_loader'>
            <p><span>Uploading</span>, please wait..</p>
            <div id="loader">
                <div className="loader"></div>
            </div>
        </div>
    )
}


export default Loader;