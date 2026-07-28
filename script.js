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
const mobileNav = document.getElementById('mobileNav');
const menuBtn = document.getElementById('menuBtn');
const icon = menuBtn.querySelector('i');

mobileNav.addEventListener('shown.bs.offcanvas', () => {
    icon.classList.remove('bi-list');
    icon.classList.add('bi-x-lg');
});

mobileNav.addEventListener('hidden.bs.offcanvas', () => {
    icon.classList.remove('bi-x-lg');
    icon.classList.add('bi-list');
});