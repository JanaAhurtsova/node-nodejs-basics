import { createWriteStream } from 'fs';
import { getPath } from '../libs/paths.js';
import { ERROR } from '../constants/Constants.js';

const fileStream = getPath(import.meta.url, './files/fileToWrite.txt');

const write = async () => {
  try {
    const writableStream = createWriteStream(fileStream, { flags: 'a' });
    process.stdin.pipe(writableStream);
  } catch {
    throw new Error(ERROR);
  }
};

await write();
