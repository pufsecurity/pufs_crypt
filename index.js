#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();

program.showHelpAfterError('(--help for additional information)');

program
  .name('pufs_crypt')
  .usage('command [options]')
  .description('PUFsecurity encrypt or decrypt tools')
  .version('1.0.0', '-v, --version', 'output the current version');

program.allowUnknownOption(false);

program.command('generate')
  .alias('gen')
  .description('generate key')
  .action(() => {
    require('./cmd/gen')();
  });

program.command('encrypt')
  .argument('<filename>', 'file to ecrypt')
  .alias('enc')
  .description('encrypt data')
  .action((filename) => {
    require('./cmd/enc')(filename);
  });

program.command('decrypt')
  .argument('<filename>', 'file to decrypt')
  .alias('dec')
  .description('decrypt data')
  .action((filename) => {
    require('./cmd/dec')(filename);
  });

program.command('backup')
  .argument('[server]', 'server IP address')
  .description('backup encryption key to server')
  .action((server) => {
    // eslint-disable-next-line import/no-unresolved, import/extensions
    require('./cmd/backup')(server);
  });

program.command('recover')
  .argument('<board>', 'source board')
  .description('recover key from server')
  .option('-c, --server <server>', 'server IP address')
  .action((board, options) => {
    // eslint-disable-next-line import/no-unresolved, import/extensions
    require('./cmd/recover')(board, options);
  });

program.command('failover')
  .argument('[boards...]')
  .description('server failover')
  .action((boards) => {
    // eslint-disable-next-line import/no-unresolved, import/extensions
    require('./cmd/failover')(boards);
  });

program.parse();
