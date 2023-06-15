import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileStream = path.resolve(__dirname, './files/fileToRead.txt');

const read = async () => {
  const readStream = createReadStream(fileStream, 'utf-8');
  readStream.pipe(process.stdout);
};

await read();
