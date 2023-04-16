export class ModalLogin {
	constructor() {
		this.modalLogin = document.querySelector('#modal-login');
		this.openModalLogin = document.querySelector('#log-in');
		this.closeModalLogin = document.querySelector('#close-button');

		this.airbnbBtn = document.querySelector('.btn-airbnb');

		if (this.modalLogin && this.openModalLogin && this.closeModalLogin) {
			this.openModalLogin.addEventListener("click", () => {
				this.modalLogin.showModal();
			});

			this.closeModalLogin.addEventListener("click", () => {
				this.modalLogin.close();
			});
		}
	}

	static getTemplate() {
		const template = `
			<!-- Модалка входа в систему -->
			<dialog class="modal" id="modal-login">
				<header class="login-header">
					<button id="close-button" class="button close-button">
						<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
							focusable="false"
							style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
							<path d="m6 6 20 20"></path>
							<path d="m26 6-20 20"></path>
						</svg>
					</button>
					<h2 class="login-header__title">Welcome back, User</h2>
				</header>

				<section class="login-body">
					<div class="login-body__avatar">
						<img src="images/avatar.webp" alt="avatar">
					</div>
					<form class="flex-column" action="#">
						<label for="email">Email</label>
						<input id="email" type="email" placeholder="Your email">

						<label for="password">Password</label>
						<input id="password" type="password" placeholder="Your password">

						<button class="btn btn-airbnb" type="button">Log in</button>
					</form>
				</section>

				<footer class="login-footer">
					<button type="button" class="btn btn-link mb-24px">Forgot password?</button>
					<div class="login-footer__flex">
						<span> Not you?</span>
						<button type="button" class="btn btn-link">Use another account</button>
					</div>
				</footer>
			</dialog>
		`;

		document.body.insertAdjacentHTML('beforeend', template); // Вставляем HTML-разметку модального окна в DOM
		return document.querySelector('#modal-login');
	}
}

ModalLogin.getTemplate(); // Вызываем статический метод напрямую