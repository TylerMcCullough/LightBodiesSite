import React from 'react';
import "./HeadLogo.css";

import {Link, useLocation} from "react-router-dom";
import whitePaper from "../../whitePaper.pdf";

const HeadLogo = () => {

    const path = useLocation();

    const selectedStyle = { color:"white", fontSize:"1.3rem"  };

    return (
        <div className='headLogoMain'>
            <div className='comLogo'>
                <img src={require("../../assets/images/lgLogo.png").default} alt="Light Bodies" />        
                <h1>LIGHT BODIES</h1>
            </div>
            <div className='paths'>
                <a href="/" style={path.pathname==="/"?selectedStyle:{}} >Home</a>
                <a href="/nftCollections" style={path.pathname==="/nftCollections"?selectedStyle:{}} >NFT Collections</a>
                <a target="_blank" rel="noreferrer" href={whitePaper} >White Paper</a>
            </div>
        </div>
    )
}

export default HeadLogo
