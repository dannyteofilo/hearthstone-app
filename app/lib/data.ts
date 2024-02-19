const data = [
    {
        "artist": "Vladimir Kafanov",
        "attack": 3,
        "cardClass": "HUNTER",
        "collectible": true,
        "cost": 3,
        "dbfId": 61966,
        "flavor": "Seat covers. Check.\nRacing stripes. Check.\nCupholder. Check.",
        "health": 4,
        "id": "YOP_028",
        "isMiniSet": true,
        "mechanics": [
            "TRIGGER_VISUAL"
        ],
        "name": "Saddlemaster",
        "rarity": "RARE",
        "set": "DARKMOON_FAIRE",
        "text": "After you play a Beast, add a random Beast to your hand.",
        "type": "MINION"
    },
    {
        "artist": "Studio Hive",
        "cardClass": "NEUTRAL",
        "classes": [
            "DRUID",
            "HUNTER"
        ],
        "collectible": true,
        "cost": 1,
        "dbfId": 61967,
        "flavor": "Just don't put a Resizing Pouch inside the Resizing Pouch.",
        "id": "YOP_029",
        "isMiniSet": true,
        "mechanics": [
            "DISCOVER"
        ],
        "multiClassGroup": "DRUID_HUNTER",
        "name": "Resizing Pouch",
        "rarity": "COMMON",
        "set": "DARKMOON_FAIRE",
        "text": "[x]<b>Discover</b> a card with Cost\nequal to your remaining\nMana Crystals.",
        "type": "SPELL"
    },
    {
        "artist": "Angelica Alieva",
        "attack": 2,
        "cardClass": "NEUTRAL",
        "classes": [
            "HUNTER",
            "DEMONHUNTER"
        ],
        "collectible": true,
        "cost": 2,
        "dbfId": 61968,
        "flavor": "She only shoots people who pet her cat without asking first.",
        "health": 3,
        "id": "YOP_030",
        "isMiniSet": true,
        "mechanics": [
            "AURA"
        ],
        "multiClassGroup": "HUNTER_DEMONHUNTER",
        "name": "Felfire Deadeye",
        "rarity": "COMMON",
        "set": "DARKMOON_FAIRE",
        "text": "Your Hero Power costs (1) less.",
        "type": "MINION"
    },
    {
        "artist": "Matt Dixon",
        "attack": 1,
        "cardClass": "NEUTRAL",
        "collectible": true,
        "cost": 2,
        "dbfId": 61969,
        "flavor": "\"Now I'm falling asleep and she's calling a crab…\"",
        "health": 4,
        "id": "YOP_031",
        "isMiniSet": true,
        "mechanics": [
            "RUSH",
            "WINDFURY"
        ],
        "name": "Crabrider",
        "race": "MURLOC",
        "races": [
            "MURLOC"
        ],
        "rarity": "COMMON",
        "set": "DARKMOON_FAIRE",
        "text": "<b><b>Rush</b>\nWindfury</b>",
        "type": "MINION"
    },
    {
        "artist": "Maria Trepalina",
        "attack": 1,
        "cardClass": "NEUTRAL",
        "collectible": true,
        "cost": 1,
        "dbfId": 61970,
        "flavor": "\"You look like the kind of person that would buy three sets of armor. One to wear, a spare, and a spare for the spare.\"",
        "health": 3,
        "id": "YOP_032",
        "isMiniSet": true,
        "mechanics": [
            "BATTLECRY"
        ],
        "name": "Armor Vendor",
        "rarity": "RARE",
        "set": "DARKMOON_FAIRE",
        "text": "<b>Battlecry:</b> Give 4 Armor to each hero.",
        "type": "MINION"
    },
    {
        "artist": "Anton Zemskov",
        "cardClass": "WARLOCK",
        "collectible": true,
        "cost": 3,
        "dbfId": 61971,
        "flavor": "\"That's the last time I let an imp spit gasoline into my car.\"",
        "id": "YOP_033",
        "isMiniSet": true,
        "name": "Backfire",
        "rarity": "COMMON",
        "set": "DARKMOON_FAIRE",
        "spellSchool": "FIRE",
        "text": "Draw 3 cards. Deal $3 damage to your hero.",
        "type": "SPELL"
    },
    {
        "artist": "Andrew Hou",
        "attack": 9,
        "cardClass": "NEUTRAL",
        "collectible": true,
        "cost": 9,
        "dbfId": 61972,
        "flavor": "It has been 5 minutes since our last Azeroth Racing League violation.",
        "health": 9,
        "id": "YOP_034",
        "isMiniSet": true,
        "mechanics": [
            "TRIGGER_VISUAL"
        ],
        "name": "Runaway Blackwing",
        "race": "DRAGON",
        "races": [
            "DRAGON"
        ],
        "rarity": "RARE",
        "set": "DARKMOON_FAIRE",
        "text": "[x]At the end of your turn,\ndeal 9 damage to a\nrandom enemy minion.",
        "type": "MINION"
    },
    {
        "artist": "Zoltan Boros",
        "attack": 6,
        "cardClass": "NEUTRAL",
        "collectible": true,
        "cost": 5,
        "dbfId": 61973,
        "elite": true,
        "flavor": "Moonforehead just didn't have the same ring to it.",
        "health": 3,
        "id": "YOP_035",
        "isMiniSet": true,
        "mechanics": [
            "TRIGGER_VISUAL"
        ],
        "name": "Moonfang",
        "race": "BEAST",
        "races": [
            "BEAST"
        ],
        "rarity": "LEGENDARY",
        "set": "DARKMOON_FAIRE",
        "text": "Can only take 1 damage at a time.",
        "type": "MINION"
    }
]

export async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 3000);
    });
}