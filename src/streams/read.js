import { createReadStream } from 'fs';
import { getPath } from '../libs/paths.js';
import { ERROR } from '../constants/Constants.js';

const fileStream = getPath(import.meta.url, './files/fileToRead.txt');

const read = async () => {
  try {
    const readStream = createReadStream(fileStream, 'utf-8');
    readStream.pipe(process.stdout);
  } catch {
    throw new Error(ERROR);
  }
};

await read();
