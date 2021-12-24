import ModuleSettings from './ModuleSettings.js';

Hooks.once('init', () =>
{
   appendStyles('modules/dracula-foundry/css/dracula-foundry.css');

   ModuleSettings.register();
   ModuleSettings.apply();

   modifyCSSVariables();
});

/**
 * Appends a stylesheet to `head`.
 *
 * @param {string}  href - the reference to the stylesheet to append.
 */
function appendStyles(href)
{
   const head = document.getElementsByTagName('head')[0];
   const style = document.createElement('link');

   style.href = href;
   style.rel = 'stylesheet';
   style.type = 'text/css';
   style.media = 'all';
   head.append(style)
}

/**
 * Modifies the core Foundry CSS variables introduced in v9.
 */
function modifyCSSVariables()
{
   const root = document.documentElement;

   root.style.setProperty('--color-border-dark', 'var(--color-dracula-border)');
   root.style.setProperty('--color-border-highlight', 'var(--color-dracula-tertiary)');
   root.style.setProperty('--color-border-highlight-alt', 'var(--color-dracula-accent)');

   root.style.setProperty('--color-shadow-dark', 'var(color-dracula-shadow)');
   root.style.setProperty('--color-shadow-highlight', 'var(--color-dracula-tertiary)');
   root.style.setProperty('--color-shadow-highlight-alt', 'var(--color-dracula-accent)');
   root.style.setProperty('--color-shadow-primary', 'var(--color-dracula-accent)');

   root.style.setProperty('--color-text-dark-primary', 'var(--color-dracula-text-primary)');
   root.style.setProperty('--color-text-dark-secondary', 'var(--color-dracula-text-primary)');
   root.style.setProperty('--color-text-dark-header', 'var(--color-dracula-text-primary)');
   root.style.setProperty('--color-text-dark-inactive', 'var(--color-dracula-text-inactive)');
   root.style.setProperty('--color-text-light-highlight', 'var(--color-dracula-text-secondary)');
   root.style.setProperty('--color-text-light-heading', 'var(--color-dracula-text-secondary)');
   root.style.setProperty('--color-text-light-primary', 'var(--color-dracula-text-secondary)');
   root.style.setProperty('--color-text-hyperlink', 'var(--color-dracula-accent-tertiary)');

   root.style.setProperty('--color-underline-header', 'var(--color-dracula-accent)');
   root.style.setProperty('--color-underline-active', 'var(--color-dracula-accent)');
}
