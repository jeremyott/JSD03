// Create array for the street number
var streetNumber = [234,194,19993,2939];
// Create array for the street name
var streetName = ["Castlewood Road", "Firetown Road", "Simsbury Road"];
// Create array for the city name
var cityName = ["Simsbury", "Weatogue", "Hartford", "Glastonbury"];
// Create array for the state name
var cityState = ["CT", "MA","ME","VT"];
// Create array for the zip code
var zip = [02143,24101,22240,10044];
console.log(streetNumber[Math.floor(Math.random()*streetNumber.length)]+" "+streetName[Math.floor(Math.random()*streetName.length)]+", "+cityName[Math.floor(Math.random()*cityName.length)] + ", " + cityState[Math.floor(Math.random()*cityState.length)] + zip[Math.floor(Math.random()*zip.length)]);

//streetNumber[Math.floor(Math.random()*streetNumber.length)]
//streetName[Math.floor(Math.random()*streetName.length)]
//cityName[Math.floor(Math.random()*cityName.length)]
//cityState[Math.floor(Math.random()*cityState.length)]
//zip[Math.floor(Math.random()*zip.length)];
