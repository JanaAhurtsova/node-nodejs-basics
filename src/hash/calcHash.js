import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCalculateHashFor = path.resolve(__dirname, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    const content = await readFile(fileToCalculateHashFor);
    const hash = createHash('SHA256').update(content).digest('hex');
    console.log(hash);
  } catch(err) {
    console.log(err);
  }
};

await calculateHash();
