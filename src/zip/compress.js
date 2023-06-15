import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileCompress = path.resolve(__dirname, './files/fileToCompress.txt');
const compressedFile = path.resolve(__dirname, './files/archive.gz');

const compress = async () => {
  const inp = createReadStream(fileCompress);
  const out = createWriteStream(compressedFile);
  inp.pipe(createGzip()).pipe(out);
};

await compress();
