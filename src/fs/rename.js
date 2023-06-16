import { stat, rename as renameFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { ERROR } from '../constants/Constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRename = path.resolve(__dirname, 'files/wrongFilename.txt');
const renamedFile = path.resolve(__dirname, 'files/properFilename.md');

const isExist = async (path) => {
  try {
    await stat(path);
    return true;
  } catch(err) {
    return false;
  }
}

const rename = async () => {
  if (!await isExist(fileToRename) || await isExist(renamedFile)) {
    throw new Error(ERROR);
  } else {
    await renameFile(fileToRename, renamedFile);
  }
};

await rename();
