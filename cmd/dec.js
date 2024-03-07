const fs = require('fs');
const { exec } = require('child_process');
const CONFIG = require('../config.json');

module.exports = function fn(filename) {
  console.log('decrypt command called', filename);
  let outputFilename;
  if (filename.endsWith('.enc')) {
    outputFilename = filename.substring(0, filename.indexOf('.enc'));
  } else if (filename.endsWith('.dec')) {
    outputFilename = filename.substring(0, filename.indexOf('.dec'));
  } else {
    outputFilename = `${filename}.dec`;
  }
  if (fs.existsSync(outputFilename)) {
    outputFilename += '.dec';
  }
  exec(`${CONFIG.kms.path}/encryptData -d -i ${filename} -o ${outputFilename}`, (error, stdout, stderr) => {
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
