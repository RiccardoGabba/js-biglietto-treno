let km, age, fullCost;
const twentyPC = 20/100;
const fortyPC = 40/100;
const costKm = 0.21;

km = prompt("inserisci i km da percorrere")
console.log(km)

let totalCost = ( km * costKm );

age = prompt("inserisci la tua età");
console.log(age)

if (age < 18) {
    console.log (totalCost - (totalCost * twentyPC));
} else if (age >= 65) {
    console.log( totalCost - (toatlCost * fortyPC));
} else {
    console.log(totalCost)
}

