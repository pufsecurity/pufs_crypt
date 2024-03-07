const fs = require('fs');
const { exec, execSync } = require('child_process');

const { parse } = require('envfile');
const CONFIG = require('../config.json');

// eslint-disable-next-line func-names
module.exports = async function (board, options) {
  const mac = execSync(`cat /proc/net/arp | grep ${board} | awk '{print $4}' | tr -d ':'`).toString().trim();
  console.log('recover command called', mac);
  const kmsconf = parse(fs.readFileSync(`${CONFIG.kms.path}/keybackup.conf`, 'utf8'));
  let ctl;
  if (!options.server) {
    ctl = kmsconf.SERVER_IP;
  } else {
    ctl = options.server;
  }
  if (!mac) {
    console.log('Mac address not found.');
    return;
  }
  exec(`./client -a ${ctl} -p ${kmsconf.SERVER_PORT} -c ${kmsconf.CLIENT_KEY_PASSWD} -m ${mac} -r`, { cwd: CONFIG.kms.path }, (error, stdout, stderr) => {
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
