import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { getPath } from '../libs/paths.js';

const fileToCalculateHashFor = getPath(import.meta.url, 'files/fileToCalculateHashFor.txt');

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
