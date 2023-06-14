import { unlink } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { ERROR, DELETE_FILE } from "../constants/Constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRemove = path.resolve(__dirname, DELETE_FILE);

const remove = async () => {
  try {
    await unlink(fileToRemove);
  } catch(err) {
    console.log(err);
    throw new Error(ERROR);
  }
};

await remove();
