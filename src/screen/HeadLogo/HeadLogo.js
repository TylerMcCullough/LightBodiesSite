import React from 'react';
import "./HeadLogo.css";

const HeadLogo = () => {
    return (
        <div className='headLogoMain'>
            <img src={require("../../assets/images/lgLogo.png").default} alt="Light Bodies" />        
            <h1>LIGHT BODIES</h1>
        </div>
    )
}

export default HeadLogo
