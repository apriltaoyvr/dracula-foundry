Hooks.once('init', () => {
   const root = document.documentElement;
   root.style.setProperty('--color-shadow-dark', hsl(230, 15%, 30%));

   // Example of setting the shadow root color; Noticeable around the sidebar.
   // root.style.setProperty('--color-shadow-dark', 'red');
});
