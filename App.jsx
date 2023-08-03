import { useEffect } from "react";

import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import SceneInit from "./lib/SceneInit";

function App() {
  useEffect(() => {
    const text = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();
    let loadedModel;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("models/Ayannacube3.glb", (gltfScene) => {
      gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.yy = 3;
      gltfScene.scene.scale.set(10, 10, 10);
      test.scene.add(gltfScene.scene);
      test.scene.add(gltfScene.scene);
    });
    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y += 0.01;
        loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}
