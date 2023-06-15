import { fileURLToPath } from 'url';
import path from 'path';
import { fork } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileSpawn = path.resolve(__dirname, './files/script.js');

const spawnChildProcess = async (args) => {
  const childProcess = fork(fileSpawn, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
