import { copyFile, mkdir, readdir } from 'fs/promises';
import path from 'path';
import { getPath } from '../libs/paths.js';

import { ERROR } from '../constants/Constants.js';

const filesFolder = getPath(import.meta.url, 'files');
const filesCopyFolder = getPath(import.meta.url, 'files_copy');

const copy = async () => {
  try {
    const files = await readdir(filesFolder);
    await mkdir(filesCopyFolder);
    const copied = files.map((file) => {
      copyFile(path.resolve(filesFolder, file), path.resolve(filesCopyFolder, file));
    })

    await Promise.all(copied);
  } catch(err) {
    console.log(err);
    throw new Error(ERROR);
  }
};

await copy();
