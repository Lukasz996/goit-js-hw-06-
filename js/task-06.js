const validationInput = document.querySelector('#validation-input')

validationInput.addEventListener('blur', event => {
	const length = validationInput.getAttribute('data-length')
	if (validationInput.value.length === parseInt(length)) {
		validationInput.classList.remove('invalid')
		validationInput.classList.add('valid')
	} else {
		validationInput.classList.remove('valid')
		validationInput.classList.add('invalid')
	}

	console.log(validationInput)
})
 