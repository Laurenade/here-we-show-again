// Contributed by: Alyssia Brooke Hall, Annie Salas, Cindy Smith, (Cameron Winney - provided some guidance)

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
]


const parentElement = document.querySelector ('.katas-list')
// kata 1
const kata1Heading = document.createElement('h3')
parentElement.append(kata1Heading)
kata1Heading.append('Kata 1')
let counter = 1 
while (counter <= 20) {
    let newElement = document.createElement ('p')
    newElement.append(counter)
    parentElement.append(newElement)
    counter += 1 
}

// kata 2
const kata2Heading = document.createElement('h3')
parentElement.append(kata2Heading)
kata2Heading.append('Kata 2')
let counter2 = 2 
while (counter2 <= 20) {
    let newElement = document.createElement ('p')
    newElement.append(counter2)
    parentElement.append(newElement)
    counter2 += 2 
}

// kata 3
const kata3Heading = document.createElement('h3')
parentElement.append(kata3Heading)
kata3Heading.append('Kata 3')
let counter3 = 1 
while (counter3 <= 20) {
    let newElement = document.createElement ('p')
    newElement.append(counter3)
    parentElement.append(newElement)
    counter3 += 2
}

// kata 4
const kata4Heading = document.createElement('h3')
parentElement.append(kata4Heading)
kata4Heading.append('Kata 4')
let counter4 = 5 
while (counter4 <= 100) {
    let newElement = document.createElement ('p')
    newElement.append(counter4)
    parentElement.append(newElement)
    counter4 += 5
}

// kata 5
const kata5Heading = document.createElement('h3')
parentElement.append(kata5Heading)
kata5Heading.append('Kata 5')
let counter5 = 1 
while (counter5 * counter5 <=100) {
    let newElement = document.createElement ('p')
    newElement.append(counter5 * counter5 )
    parentElement.append(newElement)
    counter5 += 1
}

// kata 6
const kata6Heading = document.createElement('h3')
parentElement.append(kata6Heading)
kata6Heading.append('Kata 6')
let counter6 = 20 
while (counter6 >= 1) {
    let newElement = document.createElement ('p')
    newElement.append(counter6)
    parentElement.append(newElement)
    counter6 -= 1
}

// kata 7
const kata7Heading = document.createElement('h3')
parentElement.append(kata7Heading)
kata7Heading.append('Kata 7')
let counter7 = 20 
while (counter7 >= 1) {
    let newElement = document.createElement ('p')
    newElement.append(counter7)
    parentElement.append(newElement)
    counter7 -= 2
}

// kata 8
const kata8Heading = document.createElement('h3')
parentElement.append(kata8Heading)
kata8Heading.append('Kata 8')
let counter8 = 19 
while (counter8 >= 1) {
    let newElement = document.createElement ('p')
    newElement.append(counter8)
    parentElement.append(newElement)
    counter8 -= 2
}

// kata 9
const kata9Heading = document.createElement('h3')
parentElement.append(kata9Heading)
kata9Heading.append('Kata 9')
let counter9 = 100
while (counter9 >= 5) {
    let newElement = document.createElement ('p')
    newElement.append(counter9)
    parentElement.append(newElement)
    counter9 -= 5
}

// kata 10
const kata10Heading = document.createElement('h3')
parentElement.append(kata10Heading)
kata10Heading.append('Kata 10')
let counter10 = 10
while (counter10*counter10 >= 1) {
    let newElement = document.createElement ('p')
    newElement.append(counter10*counter10)
    parentElement.append(newElement)
    counter10 -= 1
}

// kata 11
const kata11Heading = document.createElement('h3')
parentElement.append(kata11Heading)
kata11Heading.append('Kata 11')
for(counter11 = 0; counter11 <= sampleArray.length - 1; counter11 += 1) {
    let newElement = document.createElement ('p')
    newElement.append(sampleArray[counter11])
    parentElement.append(newElement)
}

// kata 12
const kata12Heading = document.createElement('h3')
parentElement.append(kata12Heading)
kata12Heading.append('Kata 12')
for(counter12 = 0; counter12 <= sampleArray.length - 1; counter12 += 1) {
    let newElement = document.createElement ('p')
    if(sampleArray[counter12] % 2 ==0) {
    newElement.append(sampleArray[counter12])
    parentElement.append(newElement)
}
}

// kata 13
const kata13Heading = document.createElement('h3')
parentElement.append(kata13Heading)
kata13Heading.append('Kata 13')
for(counter13 = 0; counter13 <= sampleArray.length - 1; counter13 += 1) {
    let newElement = document.createElement ('p')
    if(sampleArray[counter13] % 2 !==0) {
    newElement.append(sampleArray[counter13])
    parentElement.append(newElement)
}
}

// kata 14
const kata14Heading = document.createElement('h3')
parentElement.append(kata14Heading)
kata14Heading.append('Kata 14')
for(counter14 = 0; counter14 <= sampleArray.length - 1; counter14 += 1) {
    let newElement = document.createElement ('p')
    newElement.append(Math.pow(sampleArray[counter14], 2))
    parentElement.append(newElement)
}

// kata 15
const kata15Heading = document.createElement('h3')
parentElement.append(kata15Heading)
kata15Heading.append('Kata 15')
let sum = 0
for(counter15 = 0; counter15 <= 20; counter15 += 1) {
    sum += counter15
}
    let newElement15 = document.createElement ('p')
    newElement15.append(sum)
    parentElement.append(newElement15)

// kata 16
const kata16Heading = document.createElement('h3')
parentElement.append(kata16Heading)
kata16Heading.append('Kata 16')
let added = 0
for(counter16 = 0; counter16 <= sampleArray.length - 1; counter16 += 1) {
    added += sampleArray[counter16]
}
    let newElement16 = document.createElement ('p')
    newElement16.append(added)
    parentElement.append(newElement16)

// kata 17
const kata17Heading = document.createElement('h3')
parentElement.append(kata17Heading)
kata17Heading.append('Kata 17')
    let newElement = document.createElement ('p')
    newElement.append(Math.min(...sampleArray))
    parentElement.append(newElement)

// kata 18
const kata18Heading = document.createElement('h3')
parentElement.append(kata18Heading)
kata18Heading.append('Kata 18')
    let newElementOne = document.createElement ('p')
    newElementOne.append(Math.max(...sampleArray))
    parentElement.append(newElementOne)
