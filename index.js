let input = document.getElementById('input')
let initial = 0

// input.textContent = initial

//Length
let convertedLength = document.getElementById('length')

function length() {
    let toFeet = (initial * 3.28084).toFixed(3)
    let toMetre = (initial / 3.28084).toFixed(3)
    convertedLength.textContent = `${initial} meters = ${toFeet} feet | ${initial} feet = ${toMetre} meters`
}

length()

//Volume
let convertedVolume = document.getElementById('volume')

function volume() {
    let toGallon = (initial * 0.264172).toFixed(3)
    let toLitre = (initial / 0.264172).toFixed(3)
    convertedVolume.textContent = `${initial} liters = ${toGallon} gallons | ${initial} gallons = ${toLitre} liters`
}

volume()

//Mass
let convertedMass = document.getElementById('mass')

function mass() {
    let toPound = (initial * 2.20462).toFixed(3)
    let toKilo = (initial / 2.20462).toFixed(3)
    convertedMass.textContent = `${initial} kilos = ${toPound} pounds | ${initial} pounds = ${toKilo} kilos`
}

mass()

function convert() {
    console.log(initial)
    initial = input.value    
    length()
    volume()
    mass()
}