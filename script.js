const checkNumberContainer = document.getElementById('checkNumberContainer')
const checkCodeContainer = document.getElementById('checkCodeContainer')
const finalContainer = document.getElementById('finalContainer')

const checkNumberForm = document.getElementById('checkNumberForm')
const checkCodeForm = document.getElementById('checkCodeForm')
const finalButton = document.getElementById('finalButton')

let checkNumberMessage = document.getElementById('checkNumberMessage')
let checkCodeMessage = document.getElementById('checkCodeMessage')

let numberValue = document.getElementById('numberValue')
let codeValue = document.getElementById('codeValue')

let Number = ''
let Code = ''

setTimeout(showNumber, 500)

checkNumberForm.onsubmit = (event) => {
  event.preventDefault()
  checkNumberMessage.innerHTML = ''
  if (numberValue.value === Number) {
    checkNumberContainer.classList.remove('is-active')
    checkCodeContainer.classList.add('is-active')
    numberValue.value = ''
    setTimeout(showCode, 2000)
  } else {
    checkNumberMessage.innerHTML = 'Неправильный номер билета'
  }
}

checkCodeForm.onsubmit = (event) => {
  event.preventDefault()
  checkCodeMessage.innerHTML = ''
  if (codeValue.value === Code) {
    checkCodeContainer.classList.remove('is-active')
    finalContainer.classList.add('is-active')
    checkCodeMessage.innerHTML = ''
    codeValue.value = ''
  } else {
    checkCodeMessage.innerHTML = 'Неправильный проверочный код'
  }
}

finalButton.onclick = () => {
  finalContainer.classList.remove('is-active')
  checkNumberContainer.classList.add('is-active')
}

function showNumber() {
  Number = getNumber()
  alert('Номер билета: ' + Number)
}
function showCode() {
  Code = getCode()
  alert('Ваш проверочный код: ' + Code)
}
function getNumber() {
  let Number = 'SBA'
  for (let i = 0; i < 6; i++) {
    Number = Number.concat(getRandomInt(0, 10))
  }
  return Number
}
function getCode() {
  let Code = ''
  for (let i = 0; i < 4; i++) {
    Code = Code.concat(getRandomInt(0, 10))
  }
  return Code
}
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
