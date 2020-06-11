//Universal Declareations---------------------------------------------------------------------------------------------------------------------------------------------------------------
let draw = document.querySelector('#drawCard')
let currCard = document.querySelector('#currCard')
let action = document.querySelector('#action')
let cardsRemain = document.querySelector('#cardsRemain')
let reset = document.querySelector('#reset')
let firstGuess = document.querySelector('#firstGuess')  //Input
let finalGuess = document.querySelector('#finalGuess')  //Input
let oneGuess = document.querySelector('#oneGuess')  //Button
let finGuess = document.querySelector('#finGuess')  //Button
let ftdCard = document.querySelector('#ftdCard')
let message = document.querySelector('#message')
let firstGuessDisplay = document.querySelector('#firstGuessDisplay')
let finalGuessDisplay = document.querySelector('#finalGuessDisplay')
// let twos = document.querySelector('#twos')
// let threes = document.querySelector('#threes')
// let fours = document.querySelector('#fours')
// let fives = document.querySelector('#fives')
// let sixes = document.querySelector('#sixes')
// let sevens = document.querySelector('#sevens')
// let eights = document.querySelector('#eights')
// let nines = document.querySelector('#nines')
// let tens = document.querySelector('#tens')
// let jacks = document.querySelector('#jacks')
// let queens = document.querySelector('#queens')
// let kings = document.querySelector('#kings')
// let aces = document.querySelector('#aces')

//Kings---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let deck = ['2 &hearts;', '2 &diams;', '2 &spades;', '2 &clubs;', '3 &hearts;', '3 &diams;', '3 &spades;', '3 &clubs;',
    '4 &hearts;', '4 &diams;', '4 &spades;', '4 &clubs;', '5 &hearts;', '5 &diams;', '5 &spades;', '5 &clubs;', '6 &hearts;', '6 &diams;',
    '6 &spades;', '6 &clubs;', '7 &hearts;', '7 &diams;', '7 &spades;', '7 &clubs;', '8 &hearts;', '8 &diams;', '8 &spades;', '8 &clubs;',
    '9 &hearts;', '9 &diams;', '9 &spades;', '9 &clubs;', '10 &hearts;', '10 &diams;', '10 &spades;', '10 &clubs;', 'J &hearts;',
    'J &diams;', 'J &spades;', 'J &clubs;', 'Q &hearts;', 'Q &diams;', 'Q &spades;', 'Q &clubs;', 'K &hearts;', 'K &diams;', 'K &spades;',
    'K &clubs;', 'A &hearts;', 'A &diams;', 'A &spades;', 'A &clubs;',]

cardsRemain.innerText = ((deck.length) + ' cards remaining')

draw.addEventListener('click', function () {

    let totIndex = (deck.length)
    let pullCard = Math.floor(Math.random() * totIndex)
    let card = deck.splice(pullCard, 1)
    console.log(card)
    console.log(totIndex)

    let newCard = '<li>' + card + '</li>'
    currCard.innerHTML = newCard

    cardsRemain.innerText = ((deck.length) + ' cards remaining')

    let cardString = card.toString()
    if (cardString.includes('2')) {
        action.innerText = ('IS FOR YOU!')
    } if (cardString.includes('3')) {
        action.innerText = ('IS FOR ME!')
    } if (cardString.includes('4')) {
        action.innerText = ('HIT THE FLOOR!')
    } if (cardString.includes('5')) {
        action.innerText = ('FOR THE GUYS!')
    } if (cardString.includes('6')) {
        action.innerText = ('FOR THE CHICKS!')
    } if (cardString.includes('7')) {
        action.innerText = ('HEAVEN MOFO!')
    } if (cardString.includes('8')) {
        action.innerText = ('PICK A DATE!')
    } if (cardString.includes('9')) {
        action.innerText = ('BUSTA RHYME!')
    } if (cardString.includes('10')) {
        action.innerText = ('SENTENCE. GO!')
    } if (cardString.includes('J')) {
        action.innerText = ('CATEGORIES!')
    } if (cardString.includes('Q')) {
        action.innerText = ('QUESTIONMASTER!')
    } if (cardString.includes('K')) {
        action.innerText = ('MAKE A RULE FOOL!')
    } if (cardString.includes('A')) {
        action.innerText = ('NEVER HAVE I EVER! / SOCIAL!')
    }
})

reset.addEventListener('click', function () {
    deck = ['2 &hearts;', '2 &diams;', '2 &spades;', '2 &clubs;', '3 &hearts;', '3 &diams;', '3 &spades;', '3 &clubs;',
        '4 &hearts;', '4 &diams;', '4 &spades;', '4 &clubs;', '5 &hearts;', '5 &diams;', '5 &spades;', '5 &clubs;', '6 &hearts;', '6 &diams;',
        '6 &spades;', '6 &clubs;', '7 &hearts;', '7 &diams;', '7 &spades;', '7 &clubs;', '8 &hearts;', '8 &diams;', '8 &spades;', '8 &clubs;',
        '9 &hearts;', '9 &diams;', '9 &spades;', '9 &clubs;', '10 &hearts;', '10 &diams;', '10 &spades;', '10 &clubs;', 'J &hearts;',
        'J &diams;', 'J &spades;', 'J &clubs;', 'Q &hearts;', 'Q &diams;', 'Q &spades;', 'Q &clubs;', 'K &hearts;', 'K &diams;', 'K &spades;',
        'K &clubs;', 'A &hearts;', 'A &diams;', 'A &spades;', 'A &clubs;',]
    currCard.innerText = ('')
    action.innerText = ('')
    cardsRemain.innerText = ((deck.length) + ' cards remaining')
})

//Fuck The Dealer-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
let currFtdCard = []
let ftdDeck = ['2 &hearts;', '2 &diams;', '2 &spades;', '2 &clubs;', '3 &hearts;', '3 &diams;', '3 &spades;', '3 &clubs;',
    '4 &hearts;', '4 &diams;', '4 &spades;', '4 &clubs;', '5 &hearts;', '5 &diams;', '5 &spades;', '5 &clubs;', '6 &hearts;', '6 &diams;',
    '6 &spades;', '6 &clubs;', '7 &hearts;', '7 &diams;', '7 &spades;', '7 &clubs;', '8 &hearts;', '8 &diams;', '8 &spades;', '8 &clubs;',
    '9 &hearts;', '9 &diams;', '9 &spades;', '9 &clubs;', '10 &hearts;', '10 &diams;', '10 &spades;', '10 &clubs;', 'J &hearts;',
    'J &diams;', 'J &spades;', 'J &clubs;', 'Q &hearts;', 'Q &diams;', 'Q &spades;', 'Q &clubs;', 'K &hearts;', 'K &diams;', 'K &spades;',
    'K &clubs;', 'A &hearts;', 'A &diams;', 'A &spades;', 'A &clubs;',]

oneGuess.addEventListener('click', function () {
    currFtdCard = []
    finalGuess.value = (' ')
    let totIndex = ftdDeck.length
    let randomIndex = Math.floor(Math.random() * totIndex)
    let card = ftdDeck[randomIndex]
    let cardIndex = ftdDeck.indexOf(card)
    currFtdCard.push(card)
    let firstGuessValue = firstGuess.value.trim()
    let firstGuessString = firstGuessValue.toString()
    firstGuessDisplay.innerText = ('First Guess: ' + firstGuessString)
    finalGuessDisplay.innerText = ('Final Guess:')
    let guessArray = []
    for (let outer = 0; outer < ftdDeck.length; outer++) {
        let guessCheck = ftdDeck[outer]
        if (guessCheck.includes(firstGuessString)) {
            guessArray.push(outer)
        } 
        // else if (guessArray = []) {
        //     // alert("There are no more cards of that value")
        //     // { break; }
        // }
    }
    if (guessArray.includes(cardIndex)) {
        message.innerText = ('You Got It!')
        let popCard = currFtdCard.pop()
        ftdCard.innerHTML = popCard
        ftdDeck.splice(cardIndex, 1)
        guessArray.splice(cardIndex)
    } else if (cardIndex < guessArray[0]) {
        message.innerText = ('Lower')
        ftdDeck.splice(cardIndex, 1)
    } else if (cardIndex > guessArray[0]) {
        message.innerText = ('Higher')
        ftdDeck.splice(cardIndex, 1)
    }
    console.log(ftdDeck.length + ' is how many cards are left')
})

finGuess.addEventListener('click', function () {
    // firstGuess.value = (' ')
    let finalGuessValue = finalGuess.value.trim()
    let finalGuessString = finalGuessValue.toString()
    finalGuessDisplay.innerText = ('Final Guess: ' + finalGuessString)
    if (currFtdCard.toString().includes(finalGuessString)) {
        let popCard = currFtdCard.pop(0)
        ftdCard.innerHTML = popCard
        message.innerText = ('You Got It!')
    } else {
        message.innerText = ('Nope, Drink Bitch.')
        let popCard = currFtdCard.pop(0)
        ftdCard.innerHTML = popCard
    }
})
