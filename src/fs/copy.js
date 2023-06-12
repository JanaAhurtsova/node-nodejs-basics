import { copyFile, mkdir, readdir } from 'fs/promises';
import path from 'path';
import { FILES_FOLDER_PATH, FOLDER_COPY_PATH, ERROR } from '../constants/Constants.js';

const copy = async () => {
  try {
    const files = await readdir(FILES_FOLDER_PATH);
    await mkdir(FOLDER_COPY_PATH);
    const copied = files.map((file) => {
      copyFile(path.resolve(FILES_FOLDER_PATH, file), path.resolve(FOLDER_COPY_PATH, file));
    })

    await Promise.all(copied);
  } catch(err) {
    console.log(err);
    throw new Error(ERROR);
  }
};

await copy();
