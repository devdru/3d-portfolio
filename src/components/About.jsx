import { Box } from '@mui/system'
import React from 'react'
import Tilt from 'react-tilt';
import '../assets/css/about.css'
import '../assets/css/central.css'
import Img2 from '../assets/img/samp6.png'
import ci1 from '../assets/img/about/react.png'
import ci2 from '../assets/img/about/node.png'



const About = () => {
    return (
        <div id='cp'   className='about'>
            <div id='About' style={{ paddingTop: "5%",scrollMarginTop:"30px" }}>
                <h2 id='h3'>INTRODUCTION</h2>
                <Box sx={{ display: "flex" }} >
                    <h1 id='h1'>overview</h1>
                    <img id='imgtitle' src={Img2} alt="char" />
                </Box>
                <br />
                <h3 id='h4'>
                    Hello there! My name is Chandru! , Iam a Front End Developer with a Framework of React JS and Backend with NodeJS and also I'll Develop a Mobile Applications using a Techonology of Flutter Framework with FireBase..
                </h3>
                <Box sx={{ display: { sm: "block", xs: "none" }, marginTop: "50px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci1} alt="char" />
                                </div>
                                <h3 id='h3c' >front-end</h3>
                            </div>
                        </Tilt>
                        <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci2} alt="char" />
                                </div>
                                <h3 id='h3c' >back-end</h3>
                            </div>
                        </Tilt>
                      
                    
                    </Box>
                </Box>
                <br />
                <Box sx={{ display: { sm: "none", xs: "block" }, margin: "10% 7%" }}>
                    <Box>
                    <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci1} alt="char" />
                                </div>
                                <h3 id='h3c' >front-end</h3>
                            </div>
                        </Tilt>
                        <Tilt options={{ max: 30, speed: 400, perspective: 1000 }}>
                            <div id='card' className='glow-on-hover'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img id='imgcard' src={ci2} alt="char" />
                                </div>
                                <h3 id='h3c' >back-end</h3>
                            </div>
                        </Tilt>
                    
                    
                    </Box>
                </Box>
                <br />
            </div>
        </div>
    )
}
export default About
