const submit = document.querySelector('.login-form')

submit.addEventListener('submit', event => {
	event.preventDefault()

	const email = submit.elements.email
	const password = submit.elements.password

	if (email.value === '' || password.value === '') {
		alert('wypełnij wszystkie pola formularza')
		return
	} else {
		const formLogin = {
			email: email.value,
			password: password.value,
		}
		console.log(formLogin)

		submit.reset()
	}
})
