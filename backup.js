function randomCopyShift() {
    if (randomCopy.length > 1) {
        let removedPlayer = randomCopy.shift()
        randomCopy.push(removedPlayer)
        currentGuesser.innerText = ('Current Guesser: ' + randomCopy[0])
        if (randomCopy[0].toString() === randomPlayers[0].toString()) {
            let removedPlayer = randomCopy.shift()
            randomCopy.push(removedPlayer)
            currentGuesser.innerText = ('Current Guesser: ' + randomCopy[0])
        }
    }
}

function arrayShift(copyArray, originalArray) {
    if (copyArray.length > 1) {
        let removedPlayer = copyArray.shift()
        copyArray.push(removedPlayer)
        currentGuesser.innerText = ('Current Guesser: ' + copyArray[0])
        if (copyArray[0].toString() === originalArray[0].toString()) {
            let removedPlayer = copyArray.shift()
            copyArray.push(removedPlayer)
            currentGuesser.innerText = ('Current Guesser: ' + copyArray[0])
        }
    }
}

function cardCounter() {
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
}