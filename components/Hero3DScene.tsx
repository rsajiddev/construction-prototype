"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) { setWebglSupported(false); return; }
    } catch { setWebglSupported(false); return; }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f1b2d, 0.015);

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(20, 24, 40);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const cityGroup = new THREE.Group();
    scene.add(cityGroup);

    const gridHelper = new THREE.GridHelper(90, 45, 0xf28c28, 0x1e3557);
    gridHelper.position.y = -0.1;
    scene.add(gridHelper);

    const buildingMaterial = new THREE.MeshLambertMaterial({ color: 0x162740, transparent: true, opacity: 0.88 });
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xf28c28, transparent: true, opacity: 0.65 });
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

    for (let i = 0; i < 28; i++) {
      const height = 4 + Math.random() * 16;
      const width = 2.5 + Math.random() * 2.5;
      const depth = 2.5 + Math.random() * 2.5;
      const posX = (Math.random() - 0.5) * 44;
      const posZ = (Math.random() - 0.5) * 35;

      const tower = new THREE.Mesh(boxGeometry, buildingMaterial);
      tower.scale.set(width, height, depth);
      tower.position.set(posX, height / 2, posZ);

      const edges = new THREE.EdgesGeometry(boxGeometry);
      const line = new THREE.LineSegments(edges, edgeMaterial);
      line.scale.set(width, height, depth);
      line.position.copy(tower.position);

      cityGroup.add(tower);
      cityGroup.add(line);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xf28c28, 2.2);
    dirLight.position.set(30, 45, 20);
    scene.add(dirLight);

    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.00035;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.00035;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const clock = new THREE.Clock();
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      cityGroup.rotation.y = elapsed * 0.04 + mouseX;
      camera.lookAt(0, 7, 0);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=1600&q=80')" }} />;
  }

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
}