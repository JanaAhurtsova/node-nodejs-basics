import { writeFile } from 'fs/promises';
import path from 'path';

import { FILES_FOLDER_PATH, FILE_CREATE, CONTENT, ERROR } from '../constants/Constants.js';

const create = async () => {
  try {
    await writeFile(path.resolve(FILES_FOLDER_PATH, FILE_CREATE), CONTENT, { flag: 'wx' });
  } catch(err) {
    console.log(err);
    throw new Error(ERROR);
  }
};

await create();
