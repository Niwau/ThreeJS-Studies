//Scene, Mesh, Camera, Renderer

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
renderer.render(scene, camera);