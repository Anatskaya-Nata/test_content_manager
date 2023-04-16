let cardText = document.querySelectorAll('.section__gallary_card') // returns NodeList
let arrCardText = Array.prototype.slice.call(cardText) // преобразует NodeList в Array
let modalChange = document.querySelector('.modal')
let modalBlock = document.querySelector('.modal__block')
let ValueText = document.querySelectorAll('.parts__text')
let arrValueText = Array.prototype.slice.call(ValueText)
let closeButton = document.querySelector('.modal__close')
console.log(closeButton)

for (let i = 0; i < arrCardText.length; i++) {
	arrCardText[i].addEventListener('click', (event) => {
		event.preventDefault()
		modalChange.classList.add('modal__active')
		modalBlock.innerText = arrValueText[i].innerText
		console.log('arrValueText')
	})
}

closeButton.addEventListener('click', (event) => {
	event.preventDefault()
	modalChange.classList.remove('modal__active')
})
