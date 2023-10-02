import { Environment, Html, PresentationControls, useGLTF } from '@react-three/drei'
import React, { useEffect, useState } from 'react'

const Laptop = () => {
    const [num, setNum] = useState([0.5, 12, -1.5]);
    const [x, setX] = useState(Math.PI / 5.5);
    const [y, setY] = useState(Math.PI / 10);

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 1024px)").matches) {
                setNum([0.5, 12, -1.5]);
                setX(Math.PI / 5.5);
                setY(Math.PI / 8);
            } else if (window.matchMedia("(max-width: 1440px)").matches) {
                setNum([0.5, 1, -1.5]);
                setX(Math.PI / 5.5);
                setY(Math.PI / 5);
                
            } else if (window.matchMedia("(max-width: 1920px)").matches) {
                setNum([0.5, 1, -1.5]);
                setX(Math.PI /5.5);
                setY(Math.PI /4.5);
            }else if (window.matchMedia("(max-width: 2560px)").matches) {
                setNum([0.5, 1, -1.5]);
                setX(Math.PI / 6);
                setY(Math.PI / 10);
            }
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const laptop = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");

    return (
        <>
            <Environment preset='warehouse' />
            <PresentationControls global polar={[-0.2, 0]} azimuth={[-0.2, 0]}>
                <primitive object={laptop.scene} position-y={-1.1} position-x={0.5} />
                <Html wrapperClass='laptop' position-x={x} position-y={y} position={num} transform rotation-x={-0.25} distanceFactor={1.19}>
                    <iframe src='https://slider-u6ts.onrender.com/' />
                </Html>
            </PresentationControls>
        </>
    );
};

export default Laptop;
