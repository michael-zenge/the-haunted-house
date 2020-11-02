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
            case "level": return tiles.createTilemap(hex`1000070002070202020202020207020202070202000000000000000000000000000000000003080000030800000308000003080000090a0000090a0000090a0000090a000000000000000000000000000000000000000d0000000000000c000000000b0001010401010101050601010106010401`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.floorDark1,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,myTiles.tile10,myTiles.tile11,sprites.dungeon.chestClosed], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
