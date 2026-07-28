(function () {
	const enableValidationRedirect = (formId, redirectUrl) => {
		const form = document.getElementById(formId);

		if (!form) {
			return;
		}

		form.addEventListener('submit', (event) => {
			event.preventDefault();

			if (!form.checkValidity()) {
				form.classList.add('was-validated');
				return;
			}

			window.location.href = redirectUrl;
		});
	};

	enableValidationRedirect('loginForm', 'dashboard.html');
	enableValidationRedirect('signupForm', 'login.html');
})();
