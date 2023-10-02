import React from 'react'
import Technologies from './hyper'
import '../assets/css/skill.css'
import '../assets/css/main.css'

const PhoneTech = () => {
    return (
    <>
        <div id="Skills" style={{display:"flex",justifyContent:"center",justifyItems:"center"}}>
        <h1 id="techtitle">Technology</h1>
        </div>
            <div id="tech">
                <h1 id="summa">Technology</h1>
                {Technologies.map((Technology) => (
                    <div className="glow-on-hover sgg" >
                    <img id='simg' src={Technology.icon} alt={Technology.name} srcset="" />
                    </div>
                ))}
            </div>
        </>
    )
}

export default PhoneTech