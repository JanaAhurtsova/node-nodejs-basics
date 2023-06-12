import { stat, rename as renameFile } from 'fs/promises';
import path from 'path';
import { ERROR, FILES_FOLDER_PATH, RENAME_FROM, RENAME_TO } from '../constants/Constants.js';

const isExist = async (path) => {
  try {
    await stat(path);
    return true;
  } catch(err) {
    return false;
  }
}

const rename = async () => {
  if (
    await isExist(path.resolve(FILES_FOLDER_PATH, RENAME_TO)) 
    ||
    !await isExist(path.resolve(FILES_FOLDER_PATH, RENAME_FROM))
  ) {
    throw new Error(ERROR);
  } else {
    await renameFile(path.resolve(FILES_FOLDER_PATH, RENAME_FROM), path.resolve(FILES_FOLDER_PATH, RENAME_TO));
  }
};

await rename();
