import { writeFile } from 'fs/promises';
import { getPath } from '../libs/paths.js';

import { CONTENT, ERROR } from '../constants/Constants.js';

const fileToCreate = getPath(import.meta.url, 'files/fresh.txt');

const create = async () => {
  try {
    await writeFile(fileToCreate, CONTENT, { flag: 'wx' });
  } catch {
    throw new Error(ERROR);
  }
};

await create();
