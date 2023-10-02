import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , Preload, useGLTF } from '@react-three/drei'
import  Canvasloader  from './Canvasloader'



const Balls = () => {
    const balls = useGLTF('./earth.gltf', true, { draco: true })
    balls.scene.scale.set(1,1,1);
    return (
        <mesh  >
            <hemisphereLight intensity={1} />
            <pointLight intensity={1} />
            <primitive object={balls.scene} />
        </mesh>
    )
}

const Ballcanvas = () => {
    return(
        <Canvas frameloop='demand' shadows camera={{position:[20,3,5], fov: 25}} gl={{preserveDrawingBuffer:true}} >
        <Suspense fallback={<Canvasloader/>} >
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}  />
            <Balls />
        </Suspense>
        <Preload all />
    </Canvas>
    )
}

export default Ballcanvas