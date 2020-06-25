// The Scene() constructor creates a new scene,
// which represents the whole 3D world we are trying to display.
const scene = new THREE.Scene();

// A camera to see the scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// The renderer
// This is an object that renders a given scene, as viewed through a camera.
// Creates a new renderer
const renderer = new THREE.WebGLRenderer();
// Sets the size at which the renderer will draw the camera's view
renderer.setSize(window.innerWidth, window.innerHeight);
// Appends the '<canvas>' element created by the renderer to the
// document's '<body>'
// Now anything the renderer draws will be displayed in our window.
document.body.appendChild(renderer.domElement);

// Create the cube and display on canvas
let cube;

let loader = new THREE.TextureLoader();
loader.load( 'metal003.png', function(texture) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  // To specify we want 2 * 2 repeat of the image wrapped around all sides of the cube
  texture.repeat.set(2, 2);

  // Bring them together to create our cube
  // An object typically requires a geometry (what shape it is)
  // and a material (what surfacae looks like)
  let geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
  let material = new THREE.MeshLambertMaterial( { map: texture, shading: THREE.FlatShading } );
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  draw();
});

// Add a couple of lights to the scene to liven things up a bit
let light = new THREE.AmbientLight('rgb(255, 255, 255)'); // soft white light
scene.add(light);

let spotLight = new THREE.SpotLight('rgb(255, 255, 255)');
spotLight.position.set(100, 1000, 1000);
spotLight.castShadow = true;
scene.add(spotLight);

// On each frame, we rotate our cub sligthly on its X and Y axes,
// then render the scen as viewed by our camera,
// then finally call 'requestAnimationFrame()' to schedule drawing
// our next frame.
function draw() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);

  requestAnimationFrame(draw);

}
