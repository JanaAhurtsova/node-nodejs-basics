import { writeFile } from 'fs/promises';
import path from 'path';

import { DIR_PATH, FILE, CONTENT, ERROR } from '../constants/Constants.js';

const create = async () => {
  try {
    await writeFile(path.resolve(DIR_PATH, FILE), CONTENT, { flag: 'wx' });
  } catch(err) {
    console.log(err);
    throw new Error(ERROR);
  }
};

await create();
