
const chalk = require ('chalk')
// const {loto, gagnant} = require ('./modules/lottery');
const {loto, gagnant} = require ('./correction/lotterry');


// console.log("Données de Test pour loto:");
// const lotoNumbers = loto({min: 1, max: 50, nbChiffres: 5});
// console.log("Liste des chiffres tirés : " + lotoNumbers);

// console.log("\nDonnées de Test pour gagnant:");
// const winner = gagnant(["Alice", "Bob", "Charlie"]);
// console.log("Gagnant du tirage : " + winner);


// Correction
console.log('Les Numeros du loto :');
console.log(loto({min: 1, max: 50, count: 5}));

const players =["Alice", "Bob", "Charlie"];
console.log(chalk.green(`Le gagnant(e) est : ${gagnant(players)}`));

