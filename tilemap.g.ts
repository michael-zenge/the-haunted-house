// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`120007000207020202020202020702020207020202020000000000000000000000000000000000000000030800000308000003080000030800000000090a0000090a0000090a0000090a000000000000000000000000000000000000000000000d0000000000000c000000000b000000010104010101010506010101060104010101`, img`
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.floorDark1,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,myTiles.tile10,myTiles.tile11,sprites.dungeon.chestClosed], TileScale.Sixteen)
            case "level_0": return tiles.createTilemap(hex`18000700000000000000060000000000000000000000050000000005000005000000000000000605000000000000000000000000000000000000000000000000000000000002000200020000000000000000000000000000000000000002070207020000000000000000000000000000000000000002020202020000000004040000000300000400030004000002020802020004010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . 2 . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles8,sprites.dungeon.floorDark0,sprites.castle.saplingPine,sprites.castle.shrub,sprites.castle.rock0,sprites.castle.rock1,sprites.dungeon.doorClosedNorth,myTiles.tile10], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
