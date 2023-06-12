import { unlink } from 'fs/promises';
import path from 'path';
import { FILES_FOLDER_PATH, ERROR, DELETE_FILE } from "../constants/Constants.js";

const remove = async () => {
  try {
    await unlink(path.resolve(FILES_FOLDER_PATH, DELETE_FILE));
  } catch(err) {
    console.log(err);
    throw new Error(ERROR);
  }
};

await remove();
