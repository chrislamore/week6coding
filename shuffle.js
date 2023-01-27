// Test 1

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex], array[currentIndex]];
    }
    return array;
}

//Test 2 

class Player {
    constructor(name, deck) {
        this.name = name;
        this.deck = deck;
        this.totalPoints = 0;
    }
}

// Test 3

function splitDeck(arr1) {
    let arr2;
    let arr3;
    arr2 = arr1.slice(1, 4);
    arr3 = arr1.slice(3, 6);
    return arr1;
    
}
