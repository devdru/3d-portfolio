import React from "react";
import Techcanvas from "./canvas/Tech";
import Technologies from './hyper'
import '../assets/css/central.css'

const Tech = () => {
    return (
        <>
        <div id="Skills" style={{display:"flex",justifyContent:"center",justifyItems:"center",scrollMarginTop:"100px"}}>
        <h1 id="techtitle">Technology</h1>
        </div>
            <div id="tech">
                <h1 id="summa">Technology</h1>
                {Technologies.map((Technology) => (
                    <div key={Technology.name}>
                        <Techcanvas icon={Technology.icon} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Tech
