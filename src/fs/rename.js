import { stat, rename as renameFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { ERROR, RENAME_FROM, RENAME_TO } from '../constants/Constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRename = path.resolve(__dirname, RENAME_FROM);
const renamedFile = path.resolve(__dirname, RENAME_TO);

const isExist = async (path) => {
  try {
    await stat(path);
    return true;
  } catch(err) {
    return false;
  }
}

const rename = async () => {
  if (await isExist(fileToRename) || !await isExist(renamedFile)) {
    throw new Error(ERROR);
  } else {
    await renameFile(fileToRename, renamedFile);
  }
};

await rename();
