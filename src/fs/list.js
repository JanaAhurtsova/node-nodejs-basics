import { readdir } from 'fs/promises';
import { ERROR, FILES_FOLDER_PATH } from "../constants/Constants.js";

const list = async () => {
  try {
    const files = await readdir(FILES_FOLDER_PATH);
    console.log(files);
  } catch(err) {
    console.log(err);
    throw new Error(ERROR);
  }
};

await list();
