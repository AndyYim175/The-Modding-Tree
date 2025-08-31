addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(3), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('p', 14)) mult = mult.times(upgradeEffect('p', 14))
        if (hasUpgrade('p', 15)) mult = mult.times(2)
        if (hasUpgrade('#', 41)) gain = gain.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    infoboxes: {
        lore: {
            title: "Welcome",
            body() { return "Welcome to the game! Buy all the upgrades! Prestige!!!!!" },
            
        },
        
        
    },

    infoboxes: {
    lore: {
        title: "First upgrades",
        body() { return "Just... buy them i guess, there is not much strategy." },
        
    },
    
    },
    upgrades: {
        11: {
            title: "The beginning",
            description: "+1 point gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "A upgrade",
            description: "+1 point gain again",
            cost: new Decimal(2),
        },
        13: {
            title: "A increasing upgrade",
            description: "More points based of well... points",
            cost: new Decimal(3),
            effect() {
                return player.points.add(1).pow(0.02)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            title: "I want more",
            description: "+1 point gain",
            cost: new Decimal(4),
            

        },
        15: {
            title: "Muitipliers!!!",
            description: "*2 points.",
            cost: new Decimal(6),
            

        },
        16: {
            title: "Advanced upgrade",
            description: "+2 point/s.",
            cost: new Decimal(8),
            
            

        },
        21: {
            title: "More points",
            description: "+1 point/s",
            cost: new Decimal(5),
            
            

        },
    },
    
    
    layerShown(){return true}
})