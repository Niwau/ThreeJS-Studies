//Criando uma cena
const scene = new THREE.Scene();

//Criando um objeto/mesh
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 'blue' });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = 1;

//Criando um novo mesh
const sphereGeometry = new THREE.SphereGeometry(0.6);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 'red' });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = -1;

//Adicionando o AxesHelper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

//Criando um grupo e adicionando meshes
const group = new THREE.Group();
group.add(cube, sphere);
scene.add(group);

//Criando uma câmera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(45, aspect.width / aspect.height, 1, 1000 ); //FOV, ASPECT RATIO, NEAR, FAR
scene.add(camera);

//Afastando a camera
camera.position.z = 5;

//Criando o renderer
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });

//Setando o tamanho da imagem renderizada
renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);