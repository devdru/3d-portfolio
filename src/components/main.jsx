import { Box, Stack } from '@mui/system'
import React from 'react'
import '../assets/css/main.css'
import '../assets/css/button.css'
import '../assets/css/mouseanimation.css'
import Img1 from '../assets/img/img1.jpg'
import Img2 from '../assets/img/samp4.png'

export const Main = () => {
    return (
        <div id='main'>
            <Stack direction={'row'} sx={{ display: "flex", justifyContent: "space-between" }} >
                <div id='mainbox'>
                    <Box sx={{ display: "flex" }}>
                        <h2 id='h2'>Hi i'm </h2>
                        <img id='sampimg1' src={Img2} alt="char" />
                    </Box>
                    <h1 id='h1'>CHANDRU Dev</h1>
                    <h3 id='h3'>Full-stack developer, FLutter Developer, Data Analyst</h3>
                    <div style={{ display: "flex", justifyContent: "center", justifyItems: "center", paddingTop: "10%" }}>
                        <a href='https://drive.google.com/file/d/1eCITrtqgMYlk__pkYjye3T4Feo_kbpYV/view'><button class='glowing-btn'><span class='glowing-txt'>RE<span class='faulty-letter'>SU</span>ME</span></button></a>
                    </div>
                </div>
                <img id='img' src={Img1} alt="char" />
            </Stack>
            <br/>
            <br/>
            <br/>
            <div class="mouse-container" id='mouse'>
                <a href="#About">
                    <div class="mouse">
                        <div class="mouse-wheel"></div>
                    </div>
                </a>
            </div>
        </div>
    )
}
