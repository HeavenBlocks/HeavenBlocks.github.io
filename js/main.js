import { scene } from "./core/scene.js";
import { renderer } from "./core/renderer.js";
import { camera } from "./core/camera.js";
import "./core/lights.js";

import { player, playerState } from "./entities/player.js";
import "./entities/platform.js";

import { updatePlayer } from "./systems/physics.js";
import { enableCameraControls } from "./systems/cameraControls.js";

const updateCamera = enableCameraControls(camera, player);

function animate() {
    requestAnimationFrame(animate);

    updatePlayer(player, playerState);
    updateCamera();

    renderer.render(scene, camera);
}

animate();
