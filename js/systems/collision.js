export function resolveYCollision(player, collider) {
    const pBox = new THREE.Box3().setFromObject(player);
    const cBox = new THREE.Box3().setFromObject(collider);

    if (!pBox.intersectsBox(cBox)) return false;

    const overlapY = pBox.max.y - cBox.min.y;
    if (overlapY > 0 && overlapY < 1.2) {
        player.position.y -= overlapY;
        return true;
    }
    return false;
}
