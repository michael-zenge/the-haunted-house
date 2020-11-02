namespace SpriteKind {
    export const Locked = SpriteKind.create()
    export const Unlocked = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Annabelle.tileKindAt(TileDirection.Center, myTiles.tile12)) {
        game.over(true, effects.hearts)
    } else {
        if (Annabelle.vy == 0) {
            Annabelle.vy = -200
        }
    }
})
// Best practice: Use functions to avoid code duplicates.
function getGirlFrontImg () {
    return aGirl[0]
}
function getGirlBackImg () {
    return aGirl[1]
}
scene.onOverlapTile(SpriteKind.Locked, sprites.dungeon.chestClosed, function (sprite, location) {
    sprite.say("(A) to open.", 500)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.dungeon.chestOpen)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Annabelle.setImage(getGirlLeftImg())
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    Annabelle.image.flipX()
    if (Annabelle.tileKindAt(TileDirection.Center, myTiles.tile12)) {
        Annabelle.setImage(getGirlBackImg())
    } else {
        Annabelle.setImage(getGirlFrontImg())
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (Annabelle.tileKindAt(TileDirection.Center, myTiles.tile12)) {
        Annabelle.setImage(getGirlBackImg())
    } else {
        Annabelle.setImage(getGirlFrontImg())
    }
})
function getGirlLeftImg () {
    return aGirl[2]
}
scene.onOverlapTile(SpriteKind.Locked, sprites.dungeon.chestOpen, function (sprite, location) {
    sprite.say("I found a key!", 500)
    sprite.setKind(SpriteKind.Unlocked)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Annabelle.setImage(getGirlLeftImg())
    Annabelle.image.flipX()
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (Annabelle.tileKindAt(TileDirection.Center, myTiles.tile12)) {
        Annabelle.setImage(getGirlBackImg())
    }
})
scene.onOverlapTile(SpriteKind.Unlocked, myTiles.tile10, function (sprite, location) {
    sprite.say("(A) to unlock.", 500)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, myTiles.tile12)
    }
})
scene.onOverlapTile(SpriteKind.Locked, myTiles.tile10, function (sprite, location) {
    sprite.say("Locked!", 500)
})
let Annabelle: Sprite = null
let aGirl: Image[] = []
// Best practice: Manage all images at a central location.
aGirl = [img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, img`
    . . . . . . . 5 5 . . . . . . . 
    . . . . . f 5 5 5 5 f . . . . . 
    . . . . f 6 6 6 6 6 6 f . . . . 
    . . . f 6 1 1 1 6 1 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . f f 6 6 6 6 6 6 6 6 f f . . 
    . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
    . . f f f 3 f f f f 3 f f f . . 
    . . . f d 5 3 3 3 3 5 d f . . . 
    . . f d d f 3 3 3 3 f d d f . . 
    . . . f f f 5 3 3 5 f f f . . . 
    . . . . f 3 3 5 5 3 3 f . . . . 
    . . . . f 3 3 3 3 3 3 f . . . . 
    . . . . . f f f f f f . . . . . 
    `, img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f . . . . . . 
    . . . . f 6 2 5 5 6 f . . . . . 
    . . . f 6 6 6 6 1 6 6 f . . . . 
    . . . f 6 6 6 6 6 1 6 f . . . . 
    . . . f d f d 6 6 6 1 f . . . . 
    . . . f d f d 6 6 6 6 f f . . . 
    . . . f d 3 d d 6 6 6 f 6 f . . 
    . . . . f d d d f f 6 f f . . . 
    . . . . . f f 5 3 f 6 6 6 f . . 
    . . . . f 5 3 3 f f f f f . . . 
    . . . . f 3 3 f d f . . . . . . 
    . . . . . f 3 f d f . . . . . . 
    . . . . f 3 5 3 f d f . . . . . 
    . . . . f f 3 3 f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `]
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level`)
Annabelle = sprites.create(getGirlFrontImg(), SpriteKind.Locked)
tiles.placeOnTile(Annabelle, tiles.getTileLocation(9, 5))
controller.moveSprite(Annabelle, 100, 0)
scene.cameraFollowSprite(Annabelle)
Annabelle.vy = -80
Annabelle.ay = 800
