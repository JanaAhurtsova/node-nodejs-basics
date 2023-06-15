import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { ERROR } from "../constants/Constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesList = path.resolve(__dirname, 'files');

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
