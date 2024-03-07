# Installation

Prerequisites: nodejs and npm

**install pufs_crypt**

```bash
$ npm i -g 
```

**run lint**

```bash
$ npm run lint
```

**run tests**

```bash
$ npm test
```

# Quick Start

**run pufs_crypt**

```bash
$ pufs_crypt -h
Usage: pufs_crypt [options] [command]

PUFsecurity encrypt or decrypt tools

Options:
  -v, --version              output the current version
  -h, --help                 display help for command

Commands:
  generate|gen               generate key
  encrypt|enc <filename>     encrypt data
  decrypt|dec <filename>     decrypt data
  backup [server]        backup encryption key to server
  recover [options] <board>  recover key from server
  failover [boards...]       server failover
  help [command]             display help for command
```
