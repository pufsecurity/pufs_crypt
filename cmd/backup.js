const fs = require('fs');
const { exec } = require('child_process');
// eslint-disable-next-line import/no-extraneous-dependencies
const { parse } = require('envfile');
const CONFIG = require('../config.json');

// eslint-disable-next-line func-names
module.exports = function (server) {
  console.log('backup command called');
  const kmsconf = parse(fs.readFileSync(`${CONFIG.kms.path}/keybackup.conf`, 'utf8'));
  let ctl;
  if (!server) {
    ctl = kmsconf.SERVER_IP;
  } else {
    ctl = server;
  }
  exec(`./client -a ${ctl} -p ${kmsconf.SERVER_PORT} -c ${kmsconf.CLIENT_KEY_PASSWD}`, { cwd: CONFIG.kms.path }, (error, stdout, stderr) => {
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
