/* esversion: 6 */
Hooks.once("init", () => {
	const root = document.documentElement;
	root.style.setProperty(
		"--color-underline-header",
		"var(--color-dracula-accent)"
	);
	root.style.setProperty(
		"--color-underline-active",
		"var(--color-dracula-accent)"
	);
	root.style.setProperty(
		"--color-text-hyperlink",
		"var(--color-dracula-tertiary)"
	);
	root.style.setProperty(
		"--color-shadow-primary",
		"var(--color-dracula-accent)"
	);
	root.style.setProperty(
		"--color-shadow-highlight",
		"var(--color-dracula-tertiary)"
	);
	root.style.setProperty(
		"--color-shadow-highlight-alt",
		"var(--color-dracula-accent)"
	);
	root.style.setProperty(
		"--color-border-highlight",
		"var(--color-dracula-tertiary)"
	);
	root.style.setProperty(
		"--color-border-highlight-alt",
		"var(--color-dracula-accent)"
	);
	root.style.setProperty(
		"--color-shadow-dark",
		"var(--color-dracula-text-primary)"
	);

	// Light variables, trying to figure out why they turn dark. Commenting out for now.
	// 	root.style.setProperty("--color-text-light-highlight", 'var(--color-dracula-text-secondary)');
	// 	root.style.setProperty("--color-text-light-heading", 'var(--color-dracula-text-secondary)');
	// root.style.setProperty("--color-text-light-primary", 'var(--color-dracula-text-secondary)');

	root.style.setProperty(
		"--color-text-dark-primary",
		"var(--color-dracula-text-primary)"
	);
	root.style.setProperty(
		"--color-text-dark-secondary",
		"var(--color-dracula-text-primary)"
	);
	root.style.setProperty(
		"--color-text-dark-header",
		"var(--color-dracula-text-primary)"
	);
	root.style.setProperty(
		"--color-text-dark-inactive",
		"var(--color-dracula-text-inactive)"
	);
});
