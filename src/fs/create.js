import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { FILE_CREATE, CONTENT, ERROR } from '../constants/Constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCreate = path.resolve(__dirname, FILE_CREATE);

const create = async () => {
  try {
    await writeFile(fileToCreate, CONTENT, { flag: 'wx' });
  } catch(err) {
    console.log(err);
    throw new Error(ERROR);
  }
};

await create();
