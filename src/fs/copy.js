import { copyFile, mkdir, readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { ERROR, FILES, FILES_COPY } from '../constants/Constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesFolder = path.resolve(__dirname, FILES);
const filesCopyFolder = path.resolve(__dirname, FILES_COPY);

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
