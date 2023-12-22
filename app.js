const daysElement = document.querySelector(".days .number")
const hoursElement = document.querySelector(".hours .number")
const minutesElement = document.querySelector(".minutes .number")
const secondsElement = document.querySelector(".seconds .number")

const newYears = "1 Jan 2024"
const totalDuration = 0.5
const updateFrequency = 100

const startAnimation = () => {
  const startTime = Date.now()
  const initialCountdown = getRemainingTime()

  const animate = () => {
    const currentTime = Date.now()
    const progress = Math.min((currentTime - startTime) / 1000, totalDuration)

    const days = Math.floor((progress / totalDuration) * initialCountdown.days)
    const hours = Math.floor((progress / totalDuration) * initialCountdown.hours)
    const minutes = Math.floor((progress / totalDuration) * initialCountdown.minutes)
    const seconds = Math.floor((progress / totalDuration) * initialCountdown.seconds)

    daysElement.innerText = formatTime(days)
    hoursElement.innerText = formatTime(hours)
    minutesElement.innerText = formatTime(minutes)
    secondsElement.innerText = formatTime(seconds)

    if (progress < totalDuration) {
      setTimeout(animate, updateFrequency)
    } else {
      setInterval(countdown, 1000)
    }
  }

  requestAnimationFrame(animate)
}

const slideshowImages = [
  "snow.jpg",
  "snow-2.jpg",
  "snow-3.jpg",
  "snow-4.jpg"
]

let currentImageIndex = 0;

const changeBackgroundImage = () => {
  const websiteElement = document.querySelector(".website")
  websiteElement.style.backgroundImage = `url("${slideshowImages[currentImageIndex]}")`

  currentImageIndex = (currentImageIndex + 1) % slideshowImages.length

  setTimeout(changeBackgroundImage, 5000)
}

changeBackgroundImage()

const countdown = () => {
  const { days, hours, minutes, seconds } = getRemainingTime()

  daysElement.innerText = formatTime(days)
  hoursElement.innerText = formatTime(hours)
  minutesElement.innerText = formatTime(minutes)
  secondsElement.innerText = formatTime(seconds)
}

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time
}

const getRemainingTime = () => {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()
  const totalSecondsLeft = Math.max((newYearsDate - currentDate) / 1000, 0)

  const days = Math.floor(totalSecondsLeft / 3600 / 24)
  const hours = Math.floor((totalSecondsLeft % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSecondsLeft % 3600) / 60)
  const seconds = Math.floor(totalSecondsLeft % 60)

  return { days, hours, minutes, seconds }
}

startAnimation()
