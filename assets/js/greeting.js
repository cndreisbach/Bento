// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const today = new Date()
const hour = today.getHours()
const name = CONFIG.name

let greeting

if (hour >= 23 || hour < 5) {
  greeting = CONFIG.greetingNight
} else if (hour >= 6 && hour < 12) {
  greeting = CONFIG.greetingMorning
} else if (hour >= 12 && hour < 17) {
  greeting = CONFIG.greetingAfternoon
} else {
  greeting = CONFIG.greetingEvening
}

document.getElementById("greetings").innerText = `${greeting}, ${name}!`
