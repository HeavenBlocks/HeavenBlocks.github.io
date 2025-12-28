import { scene } from "../core/scene.js";

const loader = new THREE.TextureLoader();

const faceTexture = loader.load("./pngs/face.png");

);

const materials = [
    new THREE.MeshStandardMaterial({ color: 0xff5555 }), // right
    new THREE.MeshStandardMaterial({ color: 0xff5555 }), // left
    new THREE.MeshStandardMaterial({ color: 0xff5555 }), // top
    new THREE.MeshStandardMaterial({ color: 0xff5555 }), // bottom
    new THREE.MeshStandardMaterial({ map: faceTexture, transparent: true }), // front
    new THREE.MeshStandardMaterial({ color: 0xff5555 })  // back
];

export const player = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    materials
);

player.position.set(0, 2, 0);
scene.add(player);

export const playerState = {
    velocity: new THREE.Vector3(),
    onGround: false,
    coyoteTime: 0
};
