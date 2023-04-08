//Criando uma cena
const scene = new THREE.Scene();

//Criando um objeto/mesh
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 'blue' })
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.rotation.y = Math.PI / 4 * -0.5; //Rotação é dado em Euler //Valores negativos são sentido horário
scene.add(cube);

//Criando uma câmera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(45, aspect.width / aspect.height, 1, 1000 ); //FOV, ASPECT RATIO, NEAR, FAR
scene.add(camera);

//Afastando a camera
camera.position.z = 3;

//Criando o renderer
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });

//Setando o tamanho da imagem renderizada
renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);