import { readdir } from 'fs/promises';
import { getPath } from '../libs/paths.js';

import { ERROR } from "../constants/Constants.js";

const filesList = getPath(import.meta.url, 'files');

const list = async () => {
  try {
    const files = await readdir(filesList);
    console.log(files);
  } catch(err) {
    console.log(err);
    throw new Error(ERROR);
  }
};

await list();
