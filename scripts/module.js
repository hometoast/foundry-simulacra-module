Hooks.once('init', async function () {
    console.debug("simulacra initting!");

});

Hooks.once('ready', async function () {
    console.debug("simulacra ready!");
});

Hooks.on('canvasPan', async function () {
    console.debug(sceneBounds(game.canvas));
});

function sceneBounds(canvas) {
    var sp = canvas.scene._viewPosition;
    var sd = { w: canvas.screenDimensions[0], h: canvas.screenDimensions[1] };
    return {
        top: sp.y - (sd.h / 2) / sp.scale,
        left: sp.x - (sd.w / 2) / sp.scale,
        bottom: sp.y + (sd.h / 2) / sp.scale,
        right: sp.x + (sd.w / 2) / sp.scale
    };
}