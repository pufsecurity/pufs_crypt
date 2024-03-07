const fs = require('fs');
const axios = require('axios').default;
// eslint-disable-next-line import/no-extraneous-dependencies
const { parse } = require('envfile');
const CONFIG = require('../config.json');

// eslint-disable-next-line func-names
module.exports = async function (boards) {
  const kmsconf = parse(fs.readFileSync(`${CONFIG.kms.path}/keybackup.conf`, 'utf8'));
  console.log('failover command called', boards);
  let backupBoards = [];
  if (!boards || boards.length === 0) {
    if (kmsconf.MEMBER_IPs) {
      backupBoards = kmsconf.MEMBER_IPs.split(',');
    }
  }
  else {
    backupBoards.push(boards)
  }
  for (let i = 0; i < backupBoards.length; i += 1) {
    const e = backupBoards[i];
    if (e !== kmsconf.CLIENT_IP) {
      const backupAPI = CONFIG.api.endpoint.replace('[server]', e);
      console.log(`${e} redo backup key to ${kmsconf.CLIENT_IP}`);
      try {
        // eslint-disable-next-line no-await-in-loop
        const res = await axios.post(`${backupAPI}/backup`, {
          SERVER_IP: kmsconf.CLIENT_IP,
        })
          .then();
        console.log(res.data);
      } catch (ex) {
        console.log(`Error: ${e} backup ${ex.message}`);
      }
    }
  }
};
