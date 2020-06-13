//Kings Declarations---------------------------------------------------------------------------------------------------------------------------------------------------------------
let draw = document.querySelector('#drawCard')
let currCard = document.querySelector('#currCard')
let action = document.querySelector('#action')
let cardsRemain = document.querySelector('#cardsRemain')
let kingsReset = document.querySelector('#kingsReset')
//FTD Declarations
let firstGuess = document.querySelector('#firstGuess')  //Input
let finalGuess = document.querySelector('#finalGuess')  //Input
let oneGuess = document.querySelector('#oneGuess')  //Button
let finGuess = document.querySelector('#finGuess')  //Button
let ftdCard = document.querySelector('#ftdCard')
let message = document.querySelector('#message')
let firstGuessDisplay = document.querySelector('#firstGuessDisplay')
let finalGuessDisplay = document.querySelector('#finalGuessDisplay')
let twos = document.querySelector('#twos')
let threes = document.querySelector('#threes')
let fours = document.querySelector('#fours')
let fives = document.querySelector('#fives')
let sixes = document.querySelector('#sixes')
let sevens = document.querySelector('#sevens')
let eights = document.querySelector('#eights')
let nines = document.querySelector('#nines')
let tens = document.querySelector('#tens')
let jacks = document.querySelector('#jacks')
let queens = document.querySelector('#queens')
let kings = document.querySelector('#kings')
let aces = document.querySelector('#aces')
let ftdReset = document.querySelector('#ftdReset')

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

kingsReset.addEventListener('click', function () {
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
let two = 4
let three = 4
let four = 4
let five = 4
let six = 4
let seven = 4
let eight = 4
let nine = 4
let ten = 4
let jack = 4
let queen = 4
let king = 4
let ace = 4
twos.innerText = (two)
threes.innerText = (three)
fours.innerText = (four)
fives.innerText = (five)
sixes.innerText = (six)
sevens.innerText = (seven)
eights.innerText = (eight)
nines.innerText = (nine)
tens.innerText = (ten)
jacks.innerText = (jack)
queens.innerText = (queen)
kings.innerText = (king)
aces.innerText = (ace)

//Don't let player click the first guess button if the input field is empty

let currFtdCard = []
let ftdDeck = ['2 &hearts;', '2 &diams;', '2 &spades;', '2 &clubs;', '3 &hearts;', '3 &diams;', '3 &spades;', '3 &clubs;',
    '4 &hearts;', '4 &diams;', '4 &spades;', '4 &clubs;', '5 &hearts;', '5 &diams;', '5 &spades;', '5 &clubs;', '6 &hearts;', '6 &diams;',
    '6 &spades;', '6 &clubs;', '7 &hearts;', '7 &diams;', '7 &spades;', '7 &clubs;', '8 &hearts;', '8 &diams;', '8 &spades;', '8 &clubs;',
    '9 &hearts;', '9 &diams;', '9 &spades;', '9 &clubs;', '10 &hearts;', '10 &diams;', '10 &spades;', '10 &clubs;', 'J &hearts;',
    'J &diams;', 'J &spades;', 'J &clubs;', 'Q &hearts;', 'Q &diams;', 'Q &spades;', 'Q &clubs;', 'K &hearts;', 'K &diams;', 'K &spades;',
    'K &clubs;', 'A &hearts;', 'A &diams;', 'A &spades;', 'A &clubs;',]
// oneGuess.disabled = true
finGuess.disabled = true
ftdReset.disabled = true
oneGuess.addEventListener('click', function () {
    let firstGuessValue = firstGuess.value.trim()
    let firstGuessString = firstGuessValue.toString().toUpperCase()
    currFtdCard = []
    finalGuess.value = (' ')
    ftdCard.innerHTML = (' ')
    let totIndex = ftdDeck.length
    let randomIndex = Math.floor(Math.random() * totIndex)
    let card = ftdDeck[randomIndex]
    let cardIndex = ftdDeck.indexOf(card)
    currFtdCard.push(card)
    console.log(currFtdCard)
    console.log(firstGuessString)
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
        if (currFtdCard.toString().includes('2')) {
            two = two - 1
            twos.innerText = two
        }
        else if (currFtdCard.toString().includes('3')) {
            three = three - 1
            threes.innerText = three
        }
        else if (currFtdCard.toString().includes('4')) {
            four = four - 1
            fours.innerText = four
        }
        else if (currFtdCard.toString().includes('5')) {
            five = five - 1
            fives.innerText = five
        }
        else if (currFtdCard.toString().includes('6')) {
            six = six - 1
            sixes.innerText = six
        }
        else if (currFtdCard.toString().includes('7')) {
            seven = seven - 1
            sevens.innerText = seven
        }
        else if (currFtdCard.toString().includes('8')) {
            eight = eight - 1
            eights.innerText = eight
        }
        else if (currFtdCard.toString().includes('9')) {
            nine = nine - 1
            nines.innerText = nine
        }
        else if (currFtdCard.toString().includes('10')) {
            ten = ten - 1
            tens.innerText = ten
        }
        else if (currFtdCard.toString().includes('J')) {
            jack = jack - 1
            jacks.innerText = jack
        }
        else if (currFtdCard.toString().includes('Q')) {
            queen = queen - 1
            queens.innerText = queen
        }
        else if (currFtdCard.toString().includes('K')) {
            king = king - 1
            kings.innerText = king
        }
        else if (currFtdCard.toString().includes('A')) {
            ace = ace - 1
            aces.innerText = ace
        }
        let popCard = currFtdCard.pop()
        ftdCard.innerHTML = popCard
        ftdDeck.splice(cardIndex, 1)
        guessArray.splice(cardIndex)
    } else if (cardIndex < guessArray[0]) {
        message.innerText = ('Lower')
        ftdDeck.splice(cardIndex, 1)
        oneGuess.disabled = true
        finGuess.disabled = false

    } else if (cardIndex > guessArray[0]) {
        message.innerText = ('Higher')
        ftdDeck.splice(cardIndex, 1)
        oneGuess.disabled = true
        finGuess.disabled = false
    }
    console.log(ftdDeck.length + ' is how many cards are left')
    console.log(currFtdCard)
})

finGuess.addEventListener('click', function () {
    oneGuess.disabled = false
    finGuess.disabled = true
    let finalGuessValue = finalGuess.value.trim()
    let finalGuessString = finalGuessValue.toString().toUpperCase()
    finalGuessDisplay.innerText = ('Final Guess: ' + finalGuessString)
    if (currFtdCard.toString().includes('2')) {
        two = two - 1
        twos.innerText = two
    }
    else if (currFtdCard.toString().includes('3')) {
        three = three - 1
        threes.innerText = three
    }
    else if (currFtdCard.toString().includes('4')) {
        four = four - 1
        fours.innerText = four
    }
    else if (currFtdCard.toString().includes('5')) {
        five = five - 1
        fives.innerText = five
    }
    else if (currFtdCard.toString().includes('6')) {
        six = six - 1
        sixes.innerText = six
    }
    else if (currFtdCard.toString().includes('7')) {
        seven = seven - 1
        sevens.innerText = seven
    }
    else if (currFtdCard.toString().includes('8')) {
        eight = eight - 1
        eights.innerText = eight
    }
    else if (currFtdCard.toString().includes('9')) {
        nine = nine - 1
        nines.innerText = nine
    }
    else if (currFtdCard.toString().includes('10')) {
        ten = ten - 1
        tens.innerText = ten
    }
    else if (currFtdCard.toString().includes('J')) {
        jack = jack - 1
        jacks.innerText = jack
    }
    else if (currFtdCard.toString().includes('Q')) {
        queen = queen - 1
        queens.innerText = queen
    }
    else if (currFtdCard.toString().includes('K')) {
        king = king - 1
        kings.innerText = king
    }
    else if (currFtdCard.toString().includes('A')) {
        ace = ace - 1
        aces.innerText = ace
    }
    if (currFtdCard.toString().includes(finalGuessString)) {
        let popCard = currFtdCard.pop(0)
        ftdCard.innerHTML = popCard
        message.innerText = ('You Got It!')
    } else {
        message.innerText = ('Nope. Drink, Bitch.')
        let popCard = currFtdCard.pop(0)
        ftdCard.innerHTML = popCard
    }
})
