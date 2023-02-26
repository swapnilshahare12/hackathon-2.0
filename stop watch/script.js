const $ = document;
const hr = $.querySelector("#hr")
const min = $.querySelector("#min")
const sec = $.querySelector("#sec")
const mili = $.querySelector("#mili")
const startBtn = $.querySelector("#start")
const stopBtn = $.querySelector("#stop")
const resetBtn = $.querySelector("#reset")
let timer = false
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener("click", () => {
	timer = true
	stopWatch()
	console.log("start")
})

stopBtn.addEventListener("click", () => {
	timer = false
	console.log("stop")
})

resetBtn.addEventListener("click", () => {
	timer = false
	hour = 0;
  minute = 0;
  second = 0;
  count = 0;
	hr.innerHTML = "00"
	min.innerHTML = "00"
	sec.innerHTML = "00"
	mili.innerHTML = "00"
	console.log("reset")
})

function stopWatch() {
	if (timer) {
		count++
		
		if (count == 100) {
			second++
			count = 0
		}
		
		if (second == 60) {
			minute++
			second = 0
		}
		
		if (minute == 60) {
			hour++
			minute = 0
			second = 0
		}
		
		let hrString = hour
		let minString = minute
		let secString = second
		let countString = count
		
		if (hour < 10) {
			hrString = "0" + hrString
		}
		
		if (minute < 10) {
			minString = "0" + minString
		}
		
		if (second < 10) {
			secString = "0" + secString
		}
		
		if (count < 10) {
			countString = "0" + countString
		}
		
		hr.innerHTML = hrString
		min.innerHTML = minString
		sec.innerHTML = secString
		mili.innerHTML = countString
		setTimeout(stopWatch, 10)
	}
}