import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import path from 'path';

const FILE_PATH = 'src/hash/files/fileToCalculateHashFor.txt';
const dirname = path.resolve(FILE_PATH);

const calculateHash = async () => {
  try {
    const content = await readFile(dirname);
    const hash = createHash('SHA256').update(content).digest('hex');
    console.log(hash);
  } catch(err) {
    console.log(err);
  }
};

await calculateHash();
