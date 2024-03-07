const { exec } = require('child_process');
const CONFIG = require('../config.json');

module.exports = function fn(filename) {
  console.log('encrypt command called', filename);
  exec(`${CONFIG.kms.path}/encryptData -i ${filename} -o ${filename}.enc`, (error, stdout, stderr) => {
    if (error) {
      console.log(`${error.message}`);
      return;
    }

    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log(`${stdout}`);
  });
};
