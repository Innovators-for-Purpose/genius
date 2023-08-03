import * as THREE from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

// import SceneInit from './lib/SceneInit';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  125,
  window.innerWidth / window.innerHeight,
  0.0001,
  1000
);
camera.zoom = 1;
camera.updateProjectionMatrix();
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

// Area light
const width = 10;
const height = 10;
const intensity = 1;
const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
rectLight.position.set(5, 5, 0);
rectLight.lookAt(0, 0, 0);
scene.add(rectLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("models/draco/");
loader.setDRACOLoader(dracoLoader);

loader.load(
  "models/Ayannacube3.glb",
  function (gltf) {
    console.log(gltf);
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

animate();
// const text = new SceneInit('myThreeJsCanvas');
// test.initialize();
// test.animate();
// let loadedModel;
// const gltfLoader = new GLTFLoader();
// gltfLoader.load('models/Ayannacube3.glb', (gltfScene) => {
//     gltfScene.scene.rotation.y = Math.PI / 8;
//     gltfScene.scene.position.yy = 3;
//     gltfScene.scene.scale.set(10, 10, 10);
//     test.scene.add(gltfScene.scene);
//     test.scene.add(gltfScene.scene);
// });
// const animate = () => {
//     if (loadedModel) {
//         loadedModel.scene.rotation.x += 0.01;
//         loadedModel.scene.rotation.y += 0.01;
//         loadedModel.scene.rotation.z += 0.01;
//     }
//     requestAnimationFrame(animate);
// };
// animate();
