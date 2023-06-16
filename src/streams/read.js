import { createReadStream } from 'fs';
import { getPath } from '../libs/paths.js';

const fileStream = getPath(import.meta.url, './files/fileToRead.txt');

const read = async () => {
  const readStream = createReadStream(fileStream, 'utf-8');
  readStream.pipe(process.stdout);
};

await read();
