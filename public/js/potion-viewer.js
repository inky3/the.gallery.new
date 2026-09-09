// public/js/potion-viewer.js

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.165.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.165.0/examples/jsm/loaders/GLTFLoader.js";

console.log("potion-viewer.js loaded");

const canvas = document.getElementById("three-canvas");
if (!canvas) {
  console.error("Canvas #three-canvas not found");
}

// ---------- basic scene ----------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020617);

const width = canvas.clientWidth || window.innerWidth || 800;
const height = 480;
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
camera.position.set(0, 1.5, 5);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio || 1);
renderer.setSize(width, height, false);

// ---------- lights ----------
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x222233, 0.9);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
dirLight.position.set(3, 5, 3);
scene.add(dirLight);

// ---------- ground ----------
const groundGeo = new THREE.CircleGeometry(5, 64);
const groundMat = new THREE.MeshStandardMaterial({
  color: 0x111111,
  roughness: 0.9,
  metalness: 0.0,
});
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y = 0;
scene.add(ground);

// ---------- fallback cube (so we ALWAYS see something) ----------
const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
const cubeMat = new THREE.MeshStandardMaterial({ color: 0x22c55e });
const cube = new THREE.Mesh(cubeGeo, cubeMat);
cube.position.set(0, 1, 0);
scene.add(cube);

// ---------- controls ----------
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.target.set(0, 1, 0);
controls.update();

// ---------- load your GLB ----------
const loader = new GLTFLoader();
let model = null;

const modelUrl = "/models/Healing-Potion.glb"; // from public/models
console.log("Loading GLB from:", modelUrl);

loader.load(
  modelUrl,
  (gltf) => {
    model = gltf.scene;
    console.log("Model loaded:", model);

    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // auto-scale & center
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = 1.5 / maxDim;
    model.scale.setScalar(scale);

    const scaledBox = new THREE.Box3().setFromObject(model);
    const scaledCenter = new THREE.Vector3();
    scaledBox.getCenter(scaledCenter);

    model.position.x += -scaledCenter.x;
    model.position.y += 1 - scaledCenter.y;
    model.position.z += -scaledCenter.z;

    scene.add(model);
    // cube.visible = false; // uncomment when you no longer want the cube
  },
  (progress) => {
    const pct = (progress.loaded / (progress.total || 1)) * 100;
    console.log(`Model loading: ${pct.toFixed(1)}%`);
  },
  (err) => {
    console.error("Error loading Healing-Potion.glb:", err);
  }
);

// ---------- resize ----------
window.addEventListener("resize", () => {
  const w = canvas.clientWidth || window.innerWidth || 800;
  const h = 480;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
});

// ---------- animation loop ----------
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  cube.rotation.y += delta * 0.8;
  cube.rotation.x += delta * 0.4;

  if (model) {
    model.rotation.y += delta * 0.3;
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();
