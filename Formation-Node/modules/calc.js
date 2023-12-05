
const calc = function(a, b) {
    return a + b; 
}
const multiply = function(a, b) {
    return a * b; 
}

// 1er methode
// module.exports.calc = calc;
// 2e methode
module.exports = {calc, multiply};
// 3e methode
// module.exports = calc;

// la methode 1 et 2 permet d'exporté plusieurs fonctions mais il est impossible d'avoir plusieurs 'module.exports'
