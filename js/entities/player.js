import { scene } from "../core/scene.js";

const loader = new THREE.TextureLoader();

// Head face
const faceTexture = loader.load("./pngs/face.png");
faceTexture.colorSpace = THREE.SRGBColorSpace;

// Materials
const bodyMat = new THREE.MeshStandardMaterial({ color: 0x4aa3ff });
const limbMat = new THREE.MeshStandardMaterial({ color: 0x2c6ed5 });
const headMat = new THREE.MeshStandardMaterial({ color: 0xffddaa });

// Head materials (face only on front)
const headMaterials = [
    headMat, headMat, headMat, headMat,
    new THREE.MeshStandardMaterial({
        map: faceTexture,
        transparent: true
    }),
    headMat
];

// Player group
export const player = new THREE.Group();

// Torso
const torso = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 1.8, 0.7),
    bodyMat
);
torso.position.y = 1.9;
player.add(torso);

// Head
const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.45, 32, 32),
    headMaterials
);
head.position.y = 3.1;
player.add(head);

// Arms
function arm(x) {
    const a = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 1.4, 0.4),
        limbMat
    );
    a.position.set(x, 2.0, 0);
    return a;
}

player.add(arm(-1.0));
player.add(arm(1.0));

// Legs
function leg(x) {
    const l = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 1.6, 0.5),
        limbMat
    );
    l.position.set(x, 0.6, 0);
    return l;
}

player.add(leg(-0.4));
player.add(leg(0.4));

// Position
player.position.set(0, 3, 0);
scene.add(player);

// Physics anchor
export const playerState = {
    velocity: new THREE.Vector3(),
    onGround: false,
    coyoteTime: 0
};
