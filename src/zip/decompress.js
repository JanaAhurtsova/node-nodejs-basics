import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileDecompress = path.resolve(__dirname, './files/archive.gz');
const decompressedFile = path.resolve(__dirname, './files/fileToCompress.txt');

const decompress = async () => {
  const inp = createReadStream(fileDecompress);
  const out = createWriteStream(decompressedFile);
  await pipeline(inp, createUnzip(), out);
};

await decompress();
