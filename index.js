/*
  CONFIGURATION REQUIREMENTS:
    - Varies depdending on which module you are using. Refer to readme.md
*/

/*
  INSTRUCTIONS TO MAINTAINERS:
    1. BEFORE you make changes, please plan those will all other developers. Changes are hard to reverse. A good place to discuss would be #backends on Slack.
    2. Update the CHANGE HISTORY when you make changes.
    3. Do not introduce breaking changes.  You will need to maintain backward compatability for a while
    4. Do not introduce bugs ;p
    5. Notify everyone of changes made once they are committed to the repo.
*/

/*
  CHANGE HISTORY:
    2024.02.29 - Split constants from bluetail-domain to blueltail-globals.
*/

// Constants
const constants = require('./constants');

module.exports = {
  // This is really here for legacy code that was expecting to have to uppack the constants,
  constants,

  // This exports the constants as top-level exports.
  ...constants,
};
