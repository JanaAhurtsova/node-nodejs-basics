import { createWriteStream } from 'fs';
import { getPath } from '../libs/paths.js';

const fileStream = getPath(import.meta.url, './files/fileToWrite.txt');

const write = async () => {
  const writableStream = createWriteStream(fileStream, { flags: 'a' });
  process.stdin.pipe(writableStream);
};

await write();
