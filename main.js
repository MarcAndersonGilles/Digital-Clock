const htmlHours = document.querySelector('.hours')
const htmlMinutes = document.querySelector('.minutes')
const htmlSeconds = document.querySelector('.seconds')
const htmlAmpPm = document.querySelector('.ampm')

const getTime = () => {
  const nowTime = new Date()
  

  const hours = nowTime.getHours()
  const minutes = nowTime.getMinutes()
  const seconds = nowTime.getSeconds()
  
  
 const ampm = hours >=12 ? "PM" : "AM";

  htmlHours.textContent = hours
  htmlMinutes.textContent = minutes
  htmlSeconds.textContent = seconds
  htmlAmpPm.textContent = ampm
  
}
setInterval(getTime, 1000)