// Funcion para encontrar la palabra mas larga

function findLongestWord(text) {
    const words = text.split(/\s+/);
    let left = 0;
    let longestWord = '';

    while (left < words.length) {
        if (words[left].length > longestWord.length) {
            longestWord = words[left];
        }
        left++;
    }

    return longestWord;
}

//Texto del que se extrae la palabra mas larga
const text = "Que el dolor de toda mi vida sea mi epitafio, para conmemorar que una vez lo sufri. Y que, finalmente, trascendi.";
console.log(findLongestWord(text));