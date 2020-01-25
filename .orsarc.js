const path = require('path');
const fs = require('fs');

module.exports = (orsa) => {
  const { fileRule, projectRule } = orsa;
  return {
    rules: [
      fileRule((config, context, { name }) => {
        if (path.basename(name, '.js') === 'App') {
          return {
            warning: [ 'Name is too generic' ],
          };
        }
      }),
      projectRule((config, context, { transient: { path: projectPath } }) => {
        if (!fs.existsSync(path.join(projectPath, 'CONTRIBUTING.md'))) {
          return {
            warning: [ 'Project contains no contribution rules' ],
          };
        }
      }),
    ],
  };
};
