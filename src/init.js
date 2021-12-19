Hooks.once('init', () => {
	const root = document.documentElement;
	root.style.setProperty('--color-underline-header', rgb(149, 128, 255));





	root.style.setProperty('--color-underline-active', rgb(149, 128, 255));
	root.style.setProperty('--color-text-hyperlink', rgb(255, 128, 191));

	root.style.setProperty('--color-shadow-primary', rgb(149, 128, 255));





	root.style.setProperty('--color-shadow-highlight', rgb(255, 128, 191));
	root.style.setProperty('--color-shadow-highlight-alt', rgb(149, 128, 255));





	root.style.setProperty('--color-border-highlight', rgb(255, 128, 191));
	root.style.setProperty('--color-border-highlight-alt', rgb(149, 128, 255));









	root.style.setProperty('--color-shadow-dark', rgb(65, 69, 88));

	root.style.setProperty('--color-text-light-highlight', rgb(248, 248, 242));
	root.style.setProperty('--color-text-light-heading', rgb(248, 248, 242));
	root.style.setProperty('--color-text-light-primary', rgb(248, 248, 242));
	root.style.setProperty('--color-text-dark-primary', rgb(33, 34, 44));





	root.style.setProperty('--color-text-dark-secondary', rgb(108, 115, 147));
	root.style.setProperty('--color-text-dark-header', rgb(33, 34, 44));





	root.style.setProperty('--color-text-dark-inactive', rgb(108, 115, 147));

	// root.style.setProperty('', );

	// Example of setting the shadow root color; Noticeable around the sidebar.
	// root.style.setProperty('--color-shadow-dark', 'red');
});