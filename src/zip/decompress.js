import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { getPath } from '../libs/paths.js';
import { pipeline } from 'stream/promises';
import { ERROR } from '../constants/Constants.js';

const fileDecompress = getPath(import.meta.url, './files/archive.gz');
const decompressedFile = getPath(import.meta.url, './files/fileToCompress.txt');

const decompress = async () => {
  try {
    const inp = createReadStream(fileDecompress);
    const out = createWriteStream(decompressedFile);
    await pipeline(inp, createUnzip(), out);
  } catch {
    throw new Error(ERROR);
  }
};

await decompress();
