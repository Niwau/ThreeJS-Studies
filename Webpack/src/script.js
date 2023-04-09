//Scene, Mesh, Camera, Renderer
import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 'purple' });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const { 
  width,
  height 
} = aspect;

const aspectRatio = width / height;

const camera = new THREE.PerspectiveCamera(75, aspectRatio);
camera.position.z = 3;
scene.add(camera);

const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(width, height);

//Nos fornece métodos para manipular o tempo
const clock = new THREE.Clock()

//Animação baseada em FPS resultará em diferentes resultados, use o tempo passado para unificar os resultados em dispositivos com FPS diferente.
const animate = () => {
  const time = clock.getElapsedTime();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}
animate();

//Usando gsap para performar animações
//Cada linha gsap é um requestAnimationFrame
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: -2 });
gsap.to(mesh.position, { duration: 1, delay: 3, x: 0 });