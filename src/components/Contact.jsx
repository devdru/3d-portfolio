import React from "react";
import '../assets/css/central.css'
import '../assets/css/contact.css'
import Tilt from 'react-tilt';
const Contact = () => {
    return (
        <div id="Contact" style={{margin:"10%"}} >
            <Tilt options={{ max: 10, speed: 400, perspective: 1000, scale: 0.9 }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                <div class="card">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner">
                <a href="https://www.linkedin.com/in/chandru-d-116aa120b/"><h2 style={{color:"white",fontWeight:"500",padding:"9%"}}>Contact me through LinkedIn ❤️ </h2></a>
                </div>
            </div>
                </div>
            </Tilt>
        </div>
    )
}

export default Contact