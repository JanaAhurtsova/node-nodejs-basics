import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { getPath } from '../libs/paths.js';
import { ERROR } from '../constants/Constants.js';

const fileCompress = getPath(import.meta.url, './files/fileToCompress.txt');
const compressedFile = getPath(import.meta.url, './files/archive.gz');

const compress = async () => {
  try {
    const inp = createReadStream(fileCompress);
    const out = createWriteStream(compressedFile);
    inp.pipe(createGzip()).pipe(out);
  } catch {
    throw new Error(ERROR);
  }
};

await compress();
