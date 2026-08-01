// Initializes the application.

import { loadHeaderFooter } from './utils.mjs';

async function init() {
	await loadHeaderFooter();

	// Mark the current page link with .active and aria-current
	const links = document.querySelectorAll('header .navigation a');
	const path = window.location.pathname.split('/').pop() || 'index.html';
	links.forEach((a) => {
		const href = a.getAttribute('href');
		if (href === path || (href === 'index.html' && (path === '' || path === 'index.html'))) {
			a.classList.add('active');
			a.setAttribute('aria-current', 'page');
		} else {
			a.classList.remove('active');
			a.removeAttribute('aria-current');
		}
	});
}

init();
