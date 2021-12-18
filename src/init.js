Hooks.once('init', () => {
	const root = document.documentElement;
	root.style.setProperty('--color-underline-header', hsl(330, 100 % , 75 % ));
	root.style.setProperty('--color-underline-active', hsl(10, 100 % , 75 % ));
	root.style.setProperty('--color-underline-header', hsl(10, 100 % , 75 % ));
	root.style.setProperty('--color-text-hyperlink', hsl(330, 100 % , 75 % ));

	root.style.setProperty('--color-shadow-primary', hsl(250, 100 % , 75 % ));
	root.style.setProperty('--color-shadow-highlight', hsl(330, 100 % , 75 % ));
	root.style.setProperty('--color-shadow-highlight-alt', hsl(330, 100 % , 75 % ));
	root.style.setProperty('--color-border-highlight', hsl(330, 100 % , 75 % ));
	root.style.setProperty('--color-border-highlight-alt', hsl(330, 100 % , 75 % ));

	root.style.setProperty('--color-shadow-dark', hsl(230, 15 % , 30 % ));

	root.style.setProperty('--color-text-light-highlight', hsl(60, 30 % , 96 % ));
	root.style.setProperty('--color-text-light-heading', hsl(60, 30 % , 96 % ));
	root.style.setProperty('--color-text-light-primary', hsl(60, 30 % , 100 % ));
	root.style.setProperty('--color-text-dark-primary', hsl(230, 15 % , 15 % ));
	root.style.setProperty('--color-text-dark-secondary', hsl(230, 15 % , 30 % ));
	root.style.setProperty('--color-text-dark-header', hsl(230, 15 % , 15 % ));
	root.style.setProperty('--color-text-dark-inactive', hsl(230, 15 % , 50 % ));

	// root.style.setProperty('', );

	// Example of setting the shadow root color; Noticeable around the sidebar.
	// root.style.setProperty('--color-shadow-dark', 'red');
});