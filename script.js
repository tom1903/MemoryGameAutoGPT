const cards = [
    {
        name: 'apple',
        img: 'https://image.flaticon.com/icons/svg/2111/2111443.svg'
    },
    {
        name: 'banana',
        img: 'https://image.flaticon.com/icons/svg/2111/2111396.svg'
    },
    {
        name: 'cherry',
        img: 'https://image.flaticon.com/icons/svg/2111/2111423.svg'
    },
    {
        name: 'grapes',
        img: 'https://image.flaticon.com/icons/svg/2111/2111429.svg'
    },
    {
        name: 'lemon',
        img: 'https://image.flaticon.com/icons/svg/2111/2111440.svg'
    },
    {
        name: 'orange',
        img: 'https://image.flaticon.com/icons/svg/2111/2111427.svg'
    },
    {
        name: 'pear',
        img: 'https://image.flaticon.com/icons/svg/2111/2111439.svg'
    },
    {
        name: 'strawberry',
        img: 'https://image.flaticon.com/icons/svg/2111/2111425.svg'
    }
];

function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const shuffledCards = shuffle(cards);
console.log(shuffledCards);