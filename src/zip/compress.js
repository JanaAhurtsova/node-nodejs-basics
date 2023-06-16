import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { getPath } from '../libs/paths.js';

const fileCompress = getPath(import.meta.url, './files/fileToCompress.txt');
const compressedFile = getPath(import.meta.url, './files/archive.gz');

const compress = async () => {
  const inp = createReadStream(fileCompress);
  const out = createWriteStream(compressedFile);
  inp.pipe(createGzip()).pipe(out);
};

await compress();
