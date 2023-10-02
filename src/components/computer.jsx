import React from 'react';
import { Canvas } from 'react-three-fiber';
import Laptop from './canvas/Laptop';
import '../assets/css/project.css'

const Computer = () => {
    return (
        <Canvas
        camera={{
            fov:45,
            near:0.1,
            far:2000,
            position:[-3,1.5,4]
        }} >
            <Laptop />
        </Canvas>    )
}

export default Computer;