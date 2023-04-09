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

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;
scene.add(camera);

const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//Nos fornece métodos para manipular o tempo
const clock = new THREE.Clock()

//Animação baseada em FPS resultará em diferentes resultados, use o tempo passado para unificar os resultados em dispositivos com FPS diferente.
const animate = () => {
  const time = clock.getElapsedTime();
  mesh.rotation.y = time;
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}
animate();

//Aplicando responsividade
window.addEventListener("resize", () => {
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;
  
  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix()
  
  renderer.setSize(aspect.width, aspect.height)

})