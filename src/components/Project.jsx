import React from 'react';
import Computer from './computer';
import { Box } from '@mui/system'
import IMG from '../assets/img/samp5.png'
import '../assets/css/central.css'

function Project() {
    return (
        <div id='Project' style={{scrollMarginTop:"100px"}} >
        <div  style={{margin:"10% 0 0 0"}} id='cp'>
        <h2 id='h3'>MY</h2>
            <Box sx={{ display: "flex" }} >
                <h1 id='h1'>PROJECTS</h1>
                <img style={{width:"10%",padding:"0px 15px"}} src={IMG} alt="char" />
            </Box>
        </div>
        <div style={{display:"flex",width:"100%",height:"100vh",backgroundColor:"black"}}>
        <Computer />
        <h1 style={{color:"white",margin:"10px",writingMode:"vertical-lr",textOrientation:"upright"}} >Move the display</h1>
        </div>
        </div>
    );
}

export default Project;
