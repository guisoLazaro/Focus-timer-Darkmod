import { soundsTimer } from "./sounds.js"


//variaveis

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonAddMinutes = document.querySelector('.add-minutes')
const buttonSubMinutes = document.querySelector('.sub-minutes')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFirePlace = document.querySelector('.fireplace')
const inputStyleFireplace = document.querySelector('#fireplace')
const inputStyleForest = document.querySelector('#forest')
const inputStyleCoffee = document.querySelector('#coffee')
const inputStyleRain = document.querySelector('#rain')
let timeTimerOut


const soundsDarkOne = document.querySelector('.sounds-one')
const soundsDarkTwo = document.querySelector('.sounds-two')
const buttonDarkMode = document.querySelector('.dark-mode')
const bodyDark = document.querySelector('body')
const buttonLightMode = document.querySelector('.light-mode')
const timerDark = document.querySelector('.timer')
const controlsDark = document.querySelector('.controls')


let minutesIni = Number(minutesDisplay.textContent)


//eventos

buttonLightMode.addEventListener('click', function () {
  buttonLightMode.classList.add('hide')
  buttonDarkMode.classList.remove('hide')
  bodyDark.classList.add('body-dark')
  timerDark.classList.add('timer-dark')
  controlsDark.classList.add('controls-dark')
  
  inputStyleFireplace.classList.add('estilo-dark')
  inputStyleCoffee.classList.add('estilo-dark')
  inputStyleRain.classList.add('estilo-dark')
  inputStyleForest.classList.add('estilo-dark')

  inputStyleFireplace.classList.remove('estilo-two')
  inputStyleCoffee.classList.remove('estilo-two')
  inputStyleRain.classList.remove('estilo-two')
  inputStyleForest.classList.remove('estilo-two')
  
  soundsDarkOne.classList.add('sounds-one-dark')
  soundsDarkTwo.classList.add('sounds-two-dark')

  buttonForest.addEventListener('click', function () {
    buttonForest.classList.add('back-color-dark')
    buttonFirePlace.classList.remove('back-color-dark')
    buttonRain.classList.remove('back-color-dark')
    buttonCoffee.classList.remove('back-color-dark')
  })
  buttonForest.classList.remove('back-color')

  buttonRain.addEventListener('click', function () {
    buttonForest.classList.remove('back-color-dark')
    buttonFirePlace.classList.remove('back-color-dark')
    buttonRain.classList.add('back-color-dark')
    buttonCoffee.classList.remove('back-color-dark')
  })
  buttonRain.classList.remove('back-color')

  buttonCoffee.addEventListener('click', function () {
    buttonForest.classList.remove('back-color-dark')
    buttonFirePlace.classList.remove('back-color-dark')
    buttonRain.classList.remove('back-color-dark')
    buttonCoffee.classList.add('back-color-dark')
  })
  buttonCoffee.classList.remove('back-color')
 

  buttonFirePlace.addEventListener('click', function () {
    buttonForest.classList.remove('back-color-dark')
    buttonFirePlace.classList.add('back-color-dark')
    buttonRain.classList.remove('back-color-dark')
    buttonCoffee.classList.remove('back-color-dark')
  })
  buttonFirePlace.classList.remove('back-color')
  
})


buttonDarkMode.addEventListener('click', function () {
  buttonLightMode.classList.remove('hide')
  buttonDarkMode.classList.add('hide')
  bodyDark.classList.remove('body-dark')
  timerDark.classList.remove('timer-dark')
  controlsDark.classList.remove('controls-dark')
  soundsDarkOne.classList.remove('sounds-one-dark')
  soundsDarkTwo.classList.remove('sounds-two-dark')


  inputStyleFireplace.classList.remove('estilo-dark')
  inputStyleCoffee.classList.remove('estilo-dark')
  inputStyleRain.classList.remove('estilo-dark')
  inputStyleForest.classList.remove('estilo-dark')

  buttonForest.addEventListener('click', function () {
    buttonForest.classList.remove('back-color-dark')

  })
  buttonForest.classList.remove('back-color-dark')

  buttonRain.addEventListener('click', function () {
    buttonRain.classList.remove('back-color-dark')
  })
  buttonRain.classList.remove('back-color-dark')

  buttonCoffee.addEventListener('click', function () {

    buttonCoffee.classList.remove('back-color-dark')
  })
  buttonCoffee.classList.remove('back-color-dark')


  buttonFirePlace.addEventListener('click', function () {
    buttonFirePlace.classList.remove('back-color-dark')
  })
  buttonFirePlace.classList.remove('back-color-dark')

})



buttonPlay.addEventListener('click', countDown)
buttonStop.addEventListener('click', function () {
  clearTimeout(timeTimerOut)
})

buttonAddMinutes.addEventListener('click', function () {

  let minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")

})

buttonSubMinutes.addEventListener('click', function () {

  let minutes = Number(minutesDisplay.textContent)
  if (minutes >= 5) {
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
  }
})

buttonForest.addEventListener('click', function () {

  buttonForest.classList.add('back-color')
  buttonRain.classList.remove('back-color')
  buttonCoffee.classList.remove('back-color')
  buttonFirePlace.classList.remove('back-color')
  
  soundsTimer.buttonPressAudioCoffee.pause()
  soundsTimer.buttonPressAudioFirePlace.pause()
  soundsTimer.buttonPressAudioRain.pause()
  soundsTimer.buttonPressAudioForest.play()
  soundsTimer.buttonPressAudioForest.volume = inputStyleForest.value

  inputStyleForest.classList.add('estilo-two')
  inputStyleCoffee.classList.add('estilo')
  inputStyleCoffee.classList.remove('estilo-two')
  inputStyleRain.classList.add('estilo')
  inputStyleRain.classList.remove('estilo-two')
  inputStyleFireplace.classList.add('estilo')
  inputStyleFireplace.classList.remove('estilo-two')



})

buttonRain.addEventListener('click', function () {
  buttonForest.classList.remove('back-color')
  buttonRain.classList.add('back-color')
  buttonCoffee.classList.remove('back-color')
  buttonFirePlace.classList.remove('back-color')
  
  soundsTimer.buttonPressAudioCoffee.pause()
  soundsTimer.buttonPressAudioFirePlace.pause()
  soundsTimer.buttonPressAudioRain.play()
  soundsTimer.buttonPressAudioForest.pause()
  soundsTimer.buttonPressAudioRain.volume = inputStyleRain.value

  inputStyleRain.classList.add('estilo-two')
  inputStyleForest.classList.add('estilo')
  inputStyleForest.classList.remove('estilo-two')
  inputStyleCoffee.classList.add('estilo')
  inputStyleCoffee.classList.remove('estilo-two')
  inputStyleFireplace.classList.add('estilo')
  inputStyleFireplace.classList.remove('estilo-two')


})

buttonCoffee.addEventListener('click', function () {
  buttonForest.classList.remove('back-color')
  buttonRain.classList.remove('back-color')
  buttonCoffee.classList.add('back-color')
  buttonFirePlace.classList.remove('back-color')
  
  soundsTimer.buttonPressAudioCoffee.play()
  soundsTimer.buttonPressAudioFirePlace.pause()
  soundsTimer.buttonPressAudioRain.pause()
  soundsTimer.buttonPressAudioForest.pause()
  soundsTimer.buttonPressAudioCoffee.volume = inputStyleCoffee.value

  inputStyleCoffee.classList.add('estilo-two')
  inputStyleForest.classList.add('estilo')
  inputStyleForest.classList.remove('estilo-two')
  inputStyleRain.classList.add('estilo')
  inputStyleRain.classList.remove('estilo-two')
  inputStyleFireplace.classList.add('estilo')
  inputStyleFireplace.classList.remove('estilo-two')


})

buttonFirePlace.addEventListener('click', function () {
  buttonForest.classList.remove('back-color')
  buttonRain.classList.remove('back-color')
  buttonCoffee.classList.remove('back-color')
  buttonFirePlace.classList.add('back-color')
  
  soundsTimer.buttonPressAudioCoffee.pause()
  soundsTimer.buttonPressAudioFirePlace.play()
  soundsTimer.buttonPressAudioRain.pause()
  soundsTimer.buttonPressAudioForest.pause()
  soundsTimer.buttonPressAudioFirePlace.volume = inputStyleFireplace.value

  inputStyleFireplace.classList.add('estilo-two')
  inputStyleForest.classList.add('estilo')
  inputStyleForest.classList.remove('estilo-two')
  inputStyleCoffee.classList.add('estilo')
  inputStyleCoffee.classList.remove('estilo-two')
  inputStyleRain.classList.add('estilo')
  inputStyleRain.classList.remove('estilo-two')

})




//funções

function countDown() {
  
  timeTimerOut = setTimeout(function () {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  
    
  if (minutes <= 0 && seconds <= 0) {
    minutesDisplay.textContent = minutesIni
    return
  }

  if (seconds <= 0) {
    seconds = 60
    --minutes
  }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  countDown()
}, 1000)
}


