import React from 'react';
import "./HeadLogo.css";

import {Link, useLocation} from "react-router-dom";

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
                <Link to="/" style={path.pathname==="/"?selectedStyle:{}} >Home</Link>
                <Link to="/nftCollections" style={path.pathname==="/nftCollections"?selectedStyle:{}} >NFT Collections</Link>
            </div>
        </div>
    )
}

export default HeadLogo
