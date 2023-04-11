//Scene, Mesh, Camera, Renderer
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshStandardMaterial({ color: 'white', side: THREE.DoubleSide});
const mesh = new THREE.Mesh(geometry, material);
mesh.castShadow = true;
scene.add(mesh);

const planeGeometry = new THREE.PlaneGeometry(5, 5);
const planeMesh = new THREE.Mesh(planeGeometry, material);
planeMesh.receiveShadow = true;
planeMesh.position.y = -1.5;
planeMesh.rotation.x = Math.PI / 2;
scene.add(planeMesh);

const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;
scene.add(camera);

const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.shadowMapEnabled = true;
renderer.setSize(aspect.width, aspect.height);

//Nos fornece métodos para manipular o tempo
const clock = new THREE.Clock()

//Iluminação
const ambientLight = new THREE.AmbientLight("white", 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight("white", 1);
directionalLight.castShadow = true;
scene.add(directionalLight);
directionalLight.position.y = 2;

//OrbitControls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; //Makes rotation smoother

//Animação baseada em FPS resultará em diferentes resultados, use o tempo passado para unificar os resultados em dispositivos com FPS diferente.
const animate = () => {
  const time = clock.getElapsedTime();

  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
  controls.update()
}
animate();

//Aplicando responsividade
window.addEventListener("resize", () => {
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix()
  
  renderer.setSize(aspect.width, aspect.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})
