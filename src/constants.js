/**
 * Defines the main constants for module name and label.
 *
 * @type {{moduleName: string, moduleLabel: string}}
 */
const constants = {
   moduleLabel: `Dracula Foundry`,
   moduleName: 'dracula-foundry'
};

/**
 * @type {DraculaSettings} Defines all the module settings for world and client.
 */
const settings = {
   backdropBlur: 'backdropBlur',
};

export { constants, settings };

/**
 * @typedef {object} DraculaSettings
 *
 * @property {string}   backdropBlur - When enabled adds a background blur filter.
 */
