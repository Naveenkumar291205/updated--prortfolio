import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Orb() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    const w = Math.max(1, mount.clientWidth);
    const h = Math.max(1, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.25, 5);
    const material = new THREE.MeshStandardMaterial({
      color: 0x9fc747, roughness: 0.28, metalness: 0.38,
      wireframe: false, emissive: 0x26380d, emissiveIntensity: 0.38
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.28, 2),
      new THREE.MeshBasicMaterial({ color: 0xd7ff64, wireframe: true, transparent: true, opacity: 0.12 })
    );
    scene.add(wire);
    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const key = new THREE.PointLight(0xe5ffad, 4.2, 10);
    key.position.set(2, 2, 3); scene.add(key);
    const rim = new THREE.PointLight(0x6d9c27, 3.2, 10);
    rim.position.set(-3, -1, 2); scene.add(rim);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xd7ff64, transparent: true, opacity: 0.27 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.003, 8, 180), ringMaterial);
    ring.rotation.x = 1.1; ring.rotation.y = -0.25; scene.add(ring);

    let pointerX = 0, pointerY = 0, frame = 0;
    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.4;
    };
    mount.addEventListener("pointermove", onMove, { passive: true });
    const resize = () => {
      const w = Math.max(1, mount.clientWidth), h = Math.max(1, mount.clientHeight);
      camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h);
    };
    const observer = new ResizeObserver(resize); observer.observe(mount);
    const animate = () => {
      frame = requestAnimationFrame(animate);
      if (!reduced) {
        sphere.rotation.y += 0.0028;
        sphere.rotation.x += (pointerY * 0.35 - sphere.rotation.x) * 0.025;
        sphere.rotation.y += (pointerX * 0.35 - sphere.rotation.y) * 0.008;
        wire.rotation.copy(sphere.rotation);
        ring.rotation.z += 0.0018;
      }
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); mount.removeEventListener("pointermove", onMove);
      geometry.dispose(); material.dispose(); wire.geometry.dispose(); wire.material.dispose();
      ring.geometry.dispose(); ring.material.dispose(); renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="orb-canvas" ref={mountRef} aria-label="Animated interactive 3D sphere" role="img" />;
}