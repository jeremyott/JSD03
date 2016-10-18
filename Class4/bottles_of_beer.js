// Start at 99 bottles of beer
// Lyrics remain "[Total] bottles of beer on the wall, [Total] bottles of beer. Take one down pass it around."
// Minus one bottle from the previous count
// Print New [Total]

// Start at 99 bottles of beer

for (var i = 99; i >0; i--) {
  if (i>2){
    console.log(i + " bottles of beer on the wall "  + i + " bottles of beer. Take one down, pass it around " + i-- + " bottles of beer on the wall.");
  }
  else if (i===2) {
    console.log(i + " bottles of beer on the wall "  + i + " bottles of beer. Take one down, pass it around " + i-- + " bottle of beer on the wall.");
  }
  else (i===1) {
    console.log(i + " bottle of beer on the wall "  + i + " bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.");
  }
}
