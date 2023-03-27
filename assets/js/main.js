// ============================================
// Lev1_1_js-vertiefung_math_math-pi
// ============================================

const pi = Math.PI;
console.log(pi);

const roundedPi = pi.toFixed(2);
console.log(roundedPi);


// ============================================
// Lev1_2_js-vertiefung_math_math-round
// ============================================

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

array.forEach((elt) => {
    console.log(Math.round(elt))
})


// ============================================
// Lev1_3_js-vertiefung_math_math-random_math-floor
// ============================================

let randomNum = Math.random();
console.log(randomNum);

let randomNum1_10 = Math.floor(Math.random()*11);
console.log(randomNum1_10);

let randomNum1_100 = Math.floor(Math.random()*101);
console.log(randomNum1_100);


// ============================================
// Lev2_1_js-vertiefung_math_math-round_toFixed
// ============================================

function roundTo(Zahl, Genauigkeit){
    console.log(Zahl.toFixed(Genauigkeit));
}

roundTo(3.1415926535, 5)


// ============================================
// Lev2_2_js-vertiefung_math_math-random_math-floor_game
// ============================================

let randomNumber1_10 = Math.floor(Math.random()*11);
console.log(randomNumber1_10)

inputNum = prompt ("Wähle eine Nummer zwischen 0 und 10")

if (Number(inputNum )=== randomNumber1_10) {
    console.log("Du hast gewonnen");
} else {
    console.log(`Du hast verloren. Die Nummer lautet ${randomNumber1_10}`);
}