import React, { useEffect } from "react";
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  TextureLoader,
} from "three";

const VirtualLectureRoom: React.FC = () => {
  useEffect(() => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load Chalkboard Texture
    const loader = new TextureLoader();
    const chalkboardTexture = loader.load("/chulkboard.jpeg");

    // Create Floor with Chalkboard Texture
    const geometry = new PlaneGeometry(window.innerWidth, window.innerHeight);
    const material = new MeshBasicMaterial({ map: chalkboardTexture });
    const floor = new Mesh(geometry, material);
    scene.add(floor);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div id="3d-container" className="w-full h-full">
      {/* UI components (CLI, SVG, and others) will be overlayed here */}
    </div>
  );
};

export default VirtualLectureRoom;
