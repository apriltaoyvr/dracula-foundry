import { constants, settings } from './constants.js';

/**
 * Constants for setting scope type.
 *
 * @type {{world: string, client: string}}
 */
const scope = {
   client: 'client',
   world: 'world'
};

/**
 * Provides registration for all module settings.
 */
export default class ModuleSettings {
   /**
    * Applies module settings on startup setting the associated CSS variables.
    */
   static apply() {
      const root = document.documentElement;

      root.style.setProperty('--filter-dracula-backdrop',
         game.settings.get(constants.moduleName, settings.backdropBlur) ? 'blur(12px)' : 'none');
   }

   /**
    * Registers all module settings.
    *
    * @see {@link settings}
    */
   static register() {
      game.settings.register(constants.moduleName, settings.backdropBlur, {
         name: 'Enable Backdrop Blur',
         hint: 'While on, blurred backgrounds for the sidebar, windows, and macro bar are enabled',
         scope: scope.client,
         config: true,
         default: false,
         type: Boolean,
         onChange: (value) => {
            document.documentElement.style.setProperty('--filter-dracula-backdrop', value ? 'blur(12px)' : 'none');
         }
      });
      game.settings.register(constants.moduleName, settings.iconFont, {
         name: 'Use Line Awesome',
         hint: 'Change Font Awesome icons to Line Awesome icons',
         scope: scope.client,
         config: true,
         default: false,
         type: Boolean,
         onChange: (value) => {
            $(`link[href="fonts/fontawesome/css/all.min.css"]`)[0].href = "https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css";
         }
      });
   }
}
