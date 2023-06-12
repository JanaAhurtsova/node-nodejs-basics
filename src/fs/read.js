import { readFile } from 'fs/promises';
import path from 'path';
import { ERROR, FILES_FOLDER_PATH, READ_FILE } from "../constants/Constants.js";

const read = async () => {
  try {
    const content = await readFile(path.resolve(FILES_FOLDER_PATH, READ_FILE), { encoding: 'utf8' });
    console.log(content);
  } catch(err) {
    console.log(err);
    throw new Error(ERROR);
  }
};

await read();
