const { exec } = require('child_process');
const CONFIG = require('../config.json');

module.exports = function fn() {
  console.log('generate command called');
  exec(`${CONFIG.kms.path}/generateKey`, (error, stdout, stderr) => {
    if (error) {
      console.log(`${error.message}`);
      return;
    }

    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`${stdout}`);
  });
};
