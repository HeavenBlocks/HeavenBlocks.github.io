import { scene } from "../core/scene.js";

const loader = new THREE.TextureLoader();
const pillarTex = loader.load("./pngs/pillar.png");

pillarTex.wrapS = pillarTex.wrapT = THREE.RepeatWrapping;
pillarTex.repeat.set(1, 4);

const groundMat = new THREE.MeshStandardMaterial({
    color: 0x3aa655
});

const pillarMat = new THREE.MeshStandardMaterial({
    map: pillarTex
});

export const colliders = [];

// Ground
const ground = new THREE.Mesh(
    new THREE.BoxGeometry(200, 2, 200),
    groundMat
);
ground.position.y = -1;
scene.add(ground);
colliders.push(ground);

// Pillars
function pillar(x, z, height = 10) {
    const p = new THREE.Mesh(
        new THREE.BoxGeometry(3, height, 3),
        pillarMat
    );
    p.position.set(x, height / 2 - 1, z);
    scene.add(p);
    colliders.push(p);
}

// World layout
pillar(10, -10, 12);
pillar(-15, -20, 16);
pillar(20, 5, 20);
pillar(-25, 15, 14);
pillar(0, -35, 18);
