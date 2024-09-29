'use strict'

let rand_num1 = 0
let rand_num2 = 0
let oikeat = 0
let vaarat = 0

const getRandomIntNumberRange = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberRange(1, 10)
    rand_num2 = getRandomIntNumberRange(1, 10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

const updateResults = () => {
    document.querySelector('#oikeat').innerHTML = `Oikeat vastaukset ${oikeat}`
    document.querySelector('#vaarat').innerHTML = `Väärät vastaukset ${vaarat}`
}

addEventListener('DOMContentLoaded', () => {
    randomizeNumbers()
    updateResults()
})

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert('Oikein!')
        oikeat++
    } 
    else {
        alert('Väärin!')
        vaarat++
    }
    randomizeNumbers()
    updateResults()
    document.querySelector('input').value = ''
})
