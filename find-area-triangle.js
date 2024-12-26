var sideOne = 5;
var sideTwo = 6;
var sideThree = 7;

var semi = (sideOne + sideTwo + sideThree) / 2;

var area = Math.sqrt(semi *((semi -sideOne) * (semi - sideTwo) * (semi - sideThree)));

console.log(parseInt(area));
