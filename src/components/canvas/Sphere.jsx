import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';

const AbstractSphere = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xaaaaaa,
      roughness: 0.2,
      metalness: 1.0,
      emissive: 0x00ff00,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissiveIntensity: 10
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 15;

    const animate = function () {
      requestAnimationFrame(animate);

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default AbstractSphere;
