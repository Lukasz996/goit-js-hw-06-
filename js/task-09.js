const changeColorBtn = document.querySelector('.change-color')
const changeSpan = document.querySelector('.color')

changeColorBtn.addEventListener('click', () => {
	const newColor = getRandomHexColor()
	document.body.style.backgroundColor = newColor
	changeSpan.textContent = newColor
})

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`
}
