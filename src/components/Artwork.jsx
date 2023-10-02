import React from 'react'
import '../assets/css/central.css'
import { Box } from '@mui/material'
import IMG from '../assets/img/samp2.png'

import { Canvas } from 'react-three-fiber'

import { OrbitControls, ScrollControls } from '@react-three/drei'
import { Room } from './Art'

const Artwork = () => {
    return (
        <div id='Art' style={{ overflow: "hidden" }}>
            <div style={{ margin: "10% 0 0 0" }} id='cp'>
                <h2 id='h3'>MY</h2>
                <Box sx={{ display: "flex" }} >
                    <h1 id='h1'>ARTWORKS</h1>
                    <img style={{ width: "10%", padding: "0px 15px" }} src={IMG} alt="char" />
                </Box>
            </div>
            <Canvas style={{ height: "99vh", width: "98vw" }}
                camera={{
                    fov: 64,
                    position: [2.3, 1.5, 2.3],
                }} >
                <OrbitControls enableZoom={false} />
                <ScrollControls style={{width:"100vw"}} pages={3} damping={0.25}>
                    <Room />
                </ScrollControls>
            </Canvas>
        </div>
    )
}

export default Artwork