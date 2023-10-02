import { Box } from '@material-ui/core'
import React from 'react'
import Tilt from 'react-tilt';
import '../assets/css/central.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <div style={{ display: "flex",justifyContent:"center" }}>
            <h4 id='h3' style={{ color: "white",textAlign:"center" }} >Developed by DRUDEV || © copyright 2023 || All RIGHTS RESERVED</h4>
            <Box style={{ color: "white",display:"flex",marginLeft:"20px" }}>
                <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                    <a href='https://github.com/drudev-chan'><GitHubIcon sx={{fontSize:"30px",margin:"0px 10px",color:"white"}} /></a>
                </Tilt>
                <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                <a href='https://www.linkedin.com/in/chandru-d-116aa120b/' ><LinkedInIcon  sx={{fontSize:"30px",margin:"0px 10px",color:"white"}}  /></a>
                </Tilt>
                <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                <a href='https://www.instagram.com/nansense_23/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' ><InstagramIcon  sx={{fontSize:"30px",margin:"0px 10px",color:"white"}}  /></a>
                </Tilt>
            </Box>
        </div>
    )
}

export default Footer