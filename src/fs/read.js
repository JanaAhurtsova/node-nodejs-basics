import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { ERROR, READ_FILE } from "../constants/Constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.resolve(__dirname, READ_FILE)

const read = async () => {
  try {
    const content = await readFile(fileToRead, { encoding: 'utf8' });
    console.log(content);
  } catch(err) {
    console.log(err);
    throw new Error(ERROR);
  }
};

await read();
