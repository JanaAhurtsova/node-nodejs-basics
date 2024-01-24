import { unlink } from 'fs/promises';
import { getPath } from '../libs/paths.js';

import { ERROR } from "../constants/Constants.js";

const fileToRemove = getPath(import.meta.url, 'files/fileToRemove.txt');

const remove = async () => {
  try {
    await unlink(fileToRemove);
  } catch {
    throw new Error(ERROR);
  }
};

await remove();
