// Another Quality Modpack 2
// LootTypes equal LootTYpe.CHEST, ENTITY, FISHING, GIFT, UNKNOWN, BLOCK
// EquipmentSlot.MAINHAND, OFFHAND, FEET, LEGS, CHEST, HEAD

const SimplySwordsLootRemove = [
    "simplyswords:runic_katana",
    "simplyswords:runic_sai",
    "simplyswords:runic_rapier",
    "simplyswords:runic_twinblade",
    "simplyswords:runic_glaive",
    "simplyswords:runic_longsword",
    "simplyswords:runic_spear",
    "simplyswords:runic_cutlass",
    "simplyswords:runic_claymore",
    "simplyswords:watcher_claymore",
    "simplyswords:watching_warglaive",
    "simplyswords:toxic_longsword",
    "simplyswords:stormbringer",
    "simplyswords:bramblethorn",
    "simplyswords:brimstone_claymore",
    "simplyswords:storms_edge",
    "simplyswords:sword_on_a_stick",
    "simplyswords:bramblethorn",
    "simplyswords:hearthflame",
    "simplyswords:emberblade",
    "simplyswords:mjolnir",
    "simplyswords:twisted_blade",
    "simplyswords:soulkeeper",
    "simplyswords:soulstealer",
    "simplyswords:frostfall",
    "simplyswords:soulpyre",
    "simplyswords:runic_tablet",
    "simplyswords:molten_edge",
    "simplyswords:livyatan",
    "simplyswords:soulrender"
]

const TYPE_DISABLED_ITEMS = [
    "travelersbackpack:bat",
    "travelersbackpack:cow",
    "travelersbackpack:villager",
    "travelersbackpack:crepper",
    "travelersbackpack:cake",
    "travelersbackpack:lapis",
    "travelersbackpack:blaze",
    "travelersbackpack:dragon",
    "travelersbackpack:magma_cube",
    "travelersbackpack:squid",
    'travelersbackpack:standard',
]

const doomBossesLootJS = ['doom:motherdemon','doom:gladiator','doom:iconofsin','doom:arch_maykr', "adventurez:void_shadow"];
const tagStacksWpns = Ingredient.of('aqm2:weapons/rare').stacks;
const tagStacksMCDW = Ingredient.of('aqm2:mcdw').stacks;

const EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot');
LootJS.modifiers((event) => {

    // Loot Removal
    SimplySwordsLootRemove.forEach(function(item,index){
    event.addBlockLootModifier("graveyard:vase_block").removeLoot(item);
    });

    TYPE_DISABLED_ITEMS.forEach(function(item,index){
        event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot(item);
        });    

    event.addLootTypeModifier(LootType.CHEST).removeLoot("mobz:boss_ingot")
    event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot("galosphere:silver_ingot")
    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow_end")
    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow_nether")
    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow")
    event.addLootTypeModifier(LootType.CHEST).removeLoot("archon:glisteel_ingot")
    event.addLootTableModifier('chococraft:blocks/gysahl_green').removeLoot("chococraft:gold_gysahl")


    // Chest Loot
    event.addLootTypeModifier(LootType.CHEST)
    .pool((pool) => {
        pool.rolls([0, 6])
        pool.randomChance(0.15)
    .addLoot("spelunkery:glowstick");
    });

    
    // Entity Loot
    event.addLootTypeModifier(LootType.ENTITY).randomChance(0.05).pool((p) => {p.addLoot("spelunkery:glowstick").p.limitCount([0, 1], [2, 3])});
    event.addLootTypeModifier(LootType.ENTITY).randomChance(0.03).pool((p) => {p.addLoot("2x teenycoal:teeny_coal").p.limitCount([0, 1], [3, 4])});
    event.addEntityLootModifier("adventurez:void_shadow").addLoot("friendsandfoes:wildfire_crown")

    // Doom Drop Rare Wpns
    doomBossesLootJS.forEach(mob => {
        event.addEntityLootModifier(mob)
          .apply(ctx => {
            let item = tagStacksWpns[Math.floor(Math.random() * tagStacksWpns.length)];
            ctx.addLoot(item);
          });
   });

   // Drop MCDW chance
   event.addLootTypeModifier(LootType.ENTITY)
   .randomChance(0.03)
   .matchEntity(entity => {
            return entity.matchSlot(EquipmentSlot.OFFHAND, ItemFilter.ENCHANTED) ||
                entity.matchSlot(EquipmentSlot.MAINHAND, ItemFilter.ENCHANTED);
        })
    .apply(ctx => {
            let item = tagStacksMCDW[Math.floor(Math.random() * tagStacksMCDW.length)];
            let wpn = tagStacksMCDW[Math.floor(Math.random() * tagStacksMCDW.length)];
            ctx.addLoot(item);
    });
});

// // Logging stuff
// LootJS.modifiers((event) => {
// event.enableLogging();
// const modifiers = event.getGlobalModifiers();
// modifiers.forEach((modifier) => {
//     console.log(modifier)
// });
// });