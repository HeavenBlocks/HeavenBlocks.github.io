import { keys } from "./input.js";
import { platforms } from "../entities/platform.js";
import { resolveYCollision } from "./collision.js";

export function updatePlayer(player, state) {
    const speed = 0.12;
    const gravity = -0.015;
    const jumpForce = 0.32;
    const coyoteMax = 8;

    // Horizontal movement
    if (keys.KeyA) player.position.x -= speed;
    if (keys.KeyD) player.position.x += speed;
    if (keys.KeyW) player.position.z -= speed;
    if (keys.KeyS) player.position.z += speed;

    // Gravity
    state.velocity.y += gravity;
    player.position.y += state.velocity.y;

    let grounded = false;

    for (const p of platforms) {
        if (resolveYCollision(player, p)) {
            state.velocity.y = 0;
            grounded = true;
        }
    }

    if (grounded) {
        state.onGround = true;
        state.coyoteTime = coyoteMax;
    } else {
        state.onGround = false;
        state.coyoteTime--;
    }

    // Jump with forgiveness
    if (keys.Space && state.coyoteTime > 0) {
        state.velocity.y = jumpForce;
        state.coyoteTime = 0;
    }
}
