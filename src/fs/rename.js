import { stat, rename as renameFile } from 'fs/promises';
import { getPath } from '../libs/paths.js';

import { ERROR } from '../constants/Constants.js';

const fileToRename = getPath(import.meta.url, 'files/wrongFilename.txt');
const renamedFile = getPath(import.meta.url, 'files/properFilename.md');

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
