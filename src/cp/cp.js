import { getPath } from '../libs/paths.js';
import { fork } from 'child_process';

const fileSpawn = getPath(import.meta.url, './files/script.js');

const spawnChildProcess = async (args) => {
  const childProcess = fork(fileSpawn, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
