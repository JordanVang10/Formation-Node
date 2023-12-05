
const loto = function({min, max, nbChiffres}) {
    const numbers = [];
    while(numbers.length < nbChiffres) {
      const number = Math.floor(Math.random() * (max - min + 1) + min);
      if(!numbers.includes(number)) numbers.push(number);
    }
    numbers.sort((a, b) => a - b);
    return numbers;
}

const gagnant = function(participants) {
    const randomIndex = Math.floor(Math.random() * participants.length);
    return participants[randomIndex];
}

module.exports = {loto, gagnant};