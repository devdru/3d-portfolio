import React, { useRef } from 'react'
import { useGLTF,useScroll } from '@react-three/drei'
import { useFrame } from 'react-three-fiber';
import { useLayoutEffect } from 'react';
import { gsap } from "gsap";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Room(props) {
  const { nodes, materials } = useGLTF('./room/art.glb')
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();
  
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

    // Office Rotation
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
      0
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
      1
    );

    // Office movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -1,
        z: 2,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1,
        z: 2,
      },
      1
    );

    // LIBRARY FLOOR
    tl.current.from(
      libraryRef.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5
    );
    tl.current.from(
      libraryRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    // ATTIC
    tl.current.from(
      atticRef.current.position,
      {
        duration: 1.5,
        y: 2,
      },
      0
    );

    tl.current.from(
      atticRef.current.rotation,
      {
        duration: 0.5,
        y: Math.PI / 2,
      },
      1
    );

    tl.current.from(
      atticRef.current.position,
      {
        duration: 0.5,

        z: -2.2,
      },
      1.5
    );
  }, []);
  return (
    <group {...props} ref={ref} dispose={null}>
      <pointLight intensity={1} decay={2} position={[-0.34, 0.04, -0.09]} rotation={[-Math.PI / 2, 0, 0]} scale={0.52} />
      <pointLight intensity={1} decay={2} position={[-0.34, 2.21, -2.03]} rotation={[-Math.PI / 2, 0, 0]} scale={0.52} />
      <pointLight intensity={1} decay={2} position={[-2.42, 4.36, -2.03]} rotation={[-Math.PI / 2, 0, 0]} scale={0.52} />
      <group position={[-0.48, 0.48, -0.19]} scale={1.11}>
        <mesh geometry={nodes.Cube009.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube009_1.geometry} material={nodes.Cube009_1.material} />
        <mesh geometry={nodes.Cube009_2.geometry} material={materials['Artboard 2']} />
        <mesh geometry={nodes.Cube009_3.geometry} material={materials['LAND OF HOLLY@4x']} />
        <mesh geometry={nodes.Cube009_4.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube009_5.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube009_6.geometry} material={materials['Material.003']} />
      </group>
      <group position={[-0.48, 2.65, -2.14]}  ref={atticRef} scale={1.11}>
        <mesh geometry={nodes.Cube012.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube012_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube012_2.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube012_3.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube012_4.geometry} material={nodes.Cube012_4.material} />
        <mesh geometry={nodes.Cube012_5.geometry} material={materials['Asset 4@4x']} />
        <mesh geometry={nodes.Cube012_6.geometry} material={materials['EVG@4x']} />
      </group>
      <group position={[-2.55, 4.79, -2.14]}  ref={libraryRef} scale={1.11}>
        <mesh geometry={nodes.Cube021.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube021_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube021_2.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube021_3.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube021_4.geometry} material={nodes.Cube021_4.material} />
        <mesh geometry={nodes.Cube021_5.geometry} material={materials['ps1@4x']} />
        <mesh geometry={nodes.Cube021_6.geometry} material={materials['12@4x']} />
      </group>
    </group>
  )
}

useGLTF.preload('./room/art.glb')
