let modInfo = {
	name: "The big woah Tree",
	author: "andy yim",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (3), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Literally nothing",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('p', 11)) gain = gain.times(1.5)
	if (hasUpgrade('p', 12)) gain = gain.times(2)
	if (hasUpgrade('p', 13)) gain = gain.times(upgradeEffect('p', 13))
	if (hasUpgrade('p', 16)) gain = gain.times(upgradeEffect('p', 16))
	if (hasUpgrade('p', 17)) gain = gain.times(2)
	if (hasUpgrade('p', 18)) gain = gain.times(upgradeEffect('p', 18))
	if (hasUpgrade('*', 21)) gain = gain.times(2)
	if (hasUpgrade('*', 21)) gain = gain.times(2)
	if (hasUpgrade('*', 22)) gain = gain.times(1.8)
	if (hasUpgrade('*', 23)) gain = gain.times(1.6)
	if (hasUpgrade('*', 24)) gain = gain.times(1.4)
	if (hasUpgrade('*', 25)) gain = gain.times(1.2)
	if (hasUpgrade('*', 26)) gain = gain.times(upgradeEffect('*', 26))
	if (hasUpgrade('*', 27)) gain = gain.times(upgradeEffect('*', 27))
	if (hasUpgrade('*', 28)) gain = gain.times(upgradeEffect('*', 28))
	if (hasUpgrade('*', 29)) gain = gain.times(upgradeEffect('*', 29))
	if (hasUpgrade('*', 31)) gain = gain.times(upgradeEffect('*', 31))
	if (hasUpgrade('#', 11)) gain = gain.times(10)
	if (hasUpgrade('e', 11)) gain = gain.times(1.1)
	if (hasUpgrade('e', 12)) gain = gain.times(1.1)
	if (hasUpgrade('e', 13)) gain = gain.times(1.1)
	if (hasUpgrade('e', 14)) gain = gain.times(1.1)
	if (hasUpgrade('e', 15)) gain = gain.times(1.1)
	if (hasUpgrade('e', 16)) gain = gain.times(1.1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}