const htmlHours = document.querySelector('.hours')
const htmlMinutes = document.querySelector('.minutes')
const htmlSeconds = document.querySelector('.seconds')

const getTime = () => {
  const nowTime = new Date()
  

  const hours = nowTime.getHours()
  const minutes = nowTime.getMinutes()
  const seconds = nowTime.getSeconds()

  htmlHours.textContent = hours
  htmlMinutes.textContent = minutes
  htmlSeconds.textContent = seconds
  console.log(hours)
  console.log(minutes)
  console.log(seconds)
}
setInterval(getTime, 1000)