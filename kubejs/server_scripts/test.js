ServerEvents.recipes(event => {
    event.shaped("10x minecraft:netherite_pickaxe", [  //設定要製作的物品以及數量
        "AAA",  
        " B ",  //依這工作台的九宮格排列
        " B "   
    ], {
        A: "minecraft:netherite_block",  //設定用來製作的物品
        B: "minecraft:nether_star"
});
})