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
    upgrades: {
        11: {
            title: "The beginning",
            description: "+50% point gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "A better upgrade",
            description: " times 2 point gain.",
            cost: new Decimal(2),
        },
        13: {
            title: "A increasing upgrade",
            description: "More points based of well... points",
            cost: new Decimal(3),
            effect() {
                return player.points.add(1).pow(0.07)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            title: "I want more",
            description: "More prestige points based on points",
            cost: new Decimal(4),
            effect() {
                return player.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect

        },
        15: {
            title: "Basic upgrade",
            description: "*2 prestige points.",
            cost: new Decimal(6),
            

        },
        16: {
            title: "Advanced upgrade",
            description: "More points based on points... again",
            cost: new Decimal(8),
            effect() {
                return player.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            

        },
        17: {
            title: "More points",
            description: "2 times more points",
            cost: new Decimal(12),
            
            

        },
        18: {
            title: "More points",
            description: "More points based on prestige points",
            cost: new Decimal(240),
            effect() {
                return player[this.layer].points.add(1).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            
            

        },
    },
    
    
    layerShown(){return true}
})
addLayer("*", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#3480eb",                       // The color for this layer, which affects many elements.
    resource: "Transcend points",            // The name of this layer's main prestige resource.
    row: 1,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(50),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.6,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)
                      // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.

    upgrades: {
        21: {
            title: "Point 1",
            description: "2 times more points",
            cost: new Decimal(1),
        },
        22: {
            title: "Point 2",
            description: "1.8 times more points",
            cost: new Decimal(2),
        },
        23: {
            title: "Point 3",
            description: "1.6 times more points",
            cost: new Decimal(3),
        },
        24: {
            title: "Point 4",
            description: "1.4 times more points",
            cost: new Decimal(4),
        },
        25: {
            title: "Point 5",
            description: "1.2 times more points",
            cost: new Decimal(6),
        },
        26: {
            title: "Scale 1",
            description: "More points from transcend points",
            cost: new Decimal(8),
            effect() {
                return player[this.layer].points.add(1).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        27: {
            title: "Scale 2",
            description: "More points from transcend points",
            cost: new Decimal(12),
            effect() {
                return player[this.layer].points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        28: {
            title: "Scale 3",
            description: "More points from transcend points",
            cost: new Decimal(16),
            effect() {
                return player[this.layer].points.add(1).pow(0.06)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        29: {
            title: "Scale 4",
            description: "More points from transcend points",
            cost: new Decimal(24),
            effect() {
                return player[this.layer].points.add(1).pow(0.04)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        31: {
            title: "Scale 5",
            description: "More points from transcend points",
            cost: new Decimal(32),
            effect() {
                return player[this.layer].points.add(1).pow(0.02)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        
        // Look in the upgrades docs to see what goes here!
    },
})
addLayer("#", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#9b34eb",                       // The color for this layer, which affects many elements.
    resource: "Ultra points",            // The name of this layer's main prestige resource.
    row: 2,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(100000),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 1.2,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)
        
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.

    upgrades: {
        11: {
            title: "The beginning",
            description: "*10 point gain.",
            cost: new Decimal(1),
        },
        // Look in the upgrades docs to see what goes here!
    },
})
addLayer("e", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#34d8eb",                       // The color for this layer, which affects many elements.
    resource: "efficiency points",            // The name of this layer's main prestige resource.
    row: 0,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1000),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.1,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.

    upgrades: {
        11: {
            title: "Boost tier 1",
            description: "10% more points",
            cost: new Decimal(0.25),
        },
        12: {
            title: "Boost tier 1",
            description: "10% more points",
            cost: new Decimal(0.3),
        },
        13: {
            title: "Boost tier 1",
            description: "10% more points",
            cost: new Decimal(0.35),
        },
        14: {
            title: "Boost tier 1",
            description: "10% more points",
            cost: new Decimal(0.4),
        },
        15: {
            title: "Boost tier 1",
            description: "10% more points",
            cost: new Decimal(0.45),
        },
        // Look in the upgrades docs to see what goes here!
    },
    infoboxes: {
        lore: {
            title: "Effeciency boosts",
            body() { return "A special thing that boosts efficiency." },
            
        },
        
    },
    
})
