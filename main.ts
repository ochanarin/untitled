namespace SpriteKind {
    export const Inventory = SpriteKind.create()
    export const Ax = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (August.vy == 0) {
        August.vy += -300
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ax, function (sprite, otherSprite) {
	
})
let August: Sprite = null
let Inventory_b_Box_2 = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
    a 2 3 3 3 3 3 3 3 3 3 3 3 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 3 3 3 3 3 3 3 3 3 3 3 2 a 
    a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Inventory)
let Inventory_box_one = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
    a 2 3 3 3 3 3 3 3 3 3 3 3 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 3 3 3 3 3 3 3 3 3 3 3 2 a 
    a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Inventory)
Inventory_box_one.setPosition(10, 10)
Inventory_b_Box_2.setPosition(30, 10)
Inventory_box_one.setFlag(SpriteFlag.RelativeToCamera, true)
Inventory_b_Box_2.setFlag(SpriteFlag.RelativeToCamera, true)
Inventory_box_one.setFlag(SpriteFlag.Ghost, true)
Inventory_b_Box_2.setFlag(SpriteFlag.Ghost, true)
August = sprites.create(img`
    5 f f f f f f f f f f f f f f 5 
    f 5 f f f f f f f f f f f f 5 f 
    f f 5 f f f f f f f f f f 5 f f 
    f f f 5 f f f f f f f f 5 f f f 
    f f f f 5 f f f f f f 5 f f f f 
    f f f f f 5 f f f f 5 f f f f f 
    f f f f f f 5 2 2 5 f f f f f f 
    f f f f f f 2 3 3 2 f f f f f f 
    f f f f f f 2 3 3 2 f f f f f f 
    f f f f f f 2 3 3 2 f f f f f f 
    f f f f f f 5 2 2 5 f f f f f f 
    f f f f f 5 f f f f 5 f f f f f 
    f f f f 5 f f f f f f 5 f f f f 
    f f 5 5 f f f f f f f f 5 5 f f 
    f 5 f f f f f f f f f f f f 5 f 
    5 f f f f f f f f f f f f f f 5 
    `, SpriteKind.Player)
controller.moveSprite(August, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(August)
August.ay += 320
let mySprite = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
    a 2 3 3 3 3 3 3 3 3 3 3 3 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f f f f f 3 2 a 
    a 2 3 f f f f f f e 2 2 2 3 2 a 
    a 2 3 f f f f f e 2 2 2 1 3 2 a 
    a 2 3 f f f f e 2 2 2 2 2 3 2 a 
    a 2 3 f f f e f 2 2 2 1 2 3 2 a 
    a 2 3 f f e f f 2 2 2 1 f 3 2 a 
    a 2 3 f e f f f f 2 2 f f 3 2 a 
    a 2 3 e f f f f f f f f f 3 2 a 
    a 2 3 3 3 3 3 3 3 3 3 3 3 3 2 a 
    a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Ax)
info.setLife(3)
