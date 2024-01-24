import { readFile } from 'fs/promises';
import { getPath } from '../libs/paths.js';

import { ERROR } from "../constants/Constants.js";

const fileToRead = getPath(import.meta.url, 'files/fileToRead.txt')

const read = async () => {
  try {
    const content = await readFile(fileToRead, { encoding: 'utf8' });
    console.log(content);
  } catch {
    throw new Error(ERROR);
  }
};

await read();
