import * as THREE from "./node_modules/three/build/three.module.js";
// import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#can"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0xffa500,
});
const sphere = new THREE.Mesh(geometry, material);
const pointLight = new THREE.PointLight(0xffffff);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);

pointLight.position.set(-10, 10, 30);

scene.add(sphere);
scene.add(pointLight);
scene.add(lightHelper, gridHelper);

const backSpace = new THREE.TextureLoader().load("pink-galaxy.jpeg");

scene.background = backSpace;

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.005;

  renderer.render(scene, camera);
}

animate();

// http://webpage.pace.edu/sm60895n/Week7/index.html
