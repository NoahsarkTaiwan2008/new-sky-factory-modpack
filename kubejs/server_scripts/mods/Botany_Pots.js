ServerEvents.recipes(event => {
    event.recipes.botanypots.crop(
        "minecraft:candle", // 種子物品
        ["oak_leaves"], // 可種植此作物的分類
        { block: "minecraft:candle" }, // 顯示方塊
        [
            Item.of("minecraft:candle") // 物品
                .withChance(100) // 此條目相對於其他條目的權重
                .withRolls(1, 2) // 此戰利品將被選擇的次數（最小、最大）
            // 例如，當被選擇時，將提供 1 到 2 根蠟燭
        ],
        10, // 成長滴答數
        1, // 可選，成長調節器 - 在大多數情況下可設置為 1
    )

    event.recipes.botanypots.soil(
        "minecraft:oak_leaves", // 此土壤附著的物品
        { block: "minecraft:oak_leaves" }, // 顯示方塊
        ["oak_leaves"], // 此土壤提供的分類
        100, // 此土壤提供的成長滴答數，設置為 -1 表示無調整器
        0.5 // 可選，成長調節器，例如：0.5 表示所有作物將需要一半的時間
    )

    event.recipes.botanypots.fertilizer(
        "minecraft:iron_ingot", // 肥料物品
        10, // 應用的最小成長滴答數
        20 // 應用的最大成長滴答數
        // 例如：10 到 20 滴答數將隨機給予作物
    )
})

// 每次作物生長時觸發
BotanyPotsEvents.onCropGrow(event => {
    // event.random：與事件關聯的隨機對象
    // event.crop：描述所生長作物的作物對象
    // event.originalDrops：此作物掉落的物品陣列
    // event.drops：一個可寫入的陣列，用於更改作物的掉落物
    console.log([event.random, event.crop, event.originalDrops, event.drops].join(","))
})
