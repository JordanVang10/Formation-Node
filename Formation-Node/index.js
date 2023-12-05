const slugify = require ('slugify');
//            + le nom du fichier > ci-dessous < 
// Dans le terminal on tape : node > index.js < pour afficher le contenu du fichier
//             > node ./exercice/lottery/lottery.js <

// code exercice/lottery


// si l'exports module et avec la 3e methode, alors il faut enlevé les acolad {}
const {calc, multiply} = require ('./modules/calc');

console.log(calc(2, 5));
console.log(multiply(2, 5));
console.log(slugify('Bienvenue à Paris', {lower: true }));