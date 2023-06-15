import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileStream = path.resolve(__dirname, './files/fileToWrite.txt');

const write = async () => {
  const writableStream = createWriteStream(fileStream, { flags: 'a' });
  process.stdin.pipe(writableStream);
};

await write();
