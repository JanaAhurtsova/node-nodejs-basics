import { writeFile } from 'fs/promises';
import path from 'path';

const content = 'I am fresh and young';
const dirname = 'src/fs/files';
const file = path.resolve(dirname, 'fresh.txt');
const error = 'FS operation failed';

const create = async () => {
  try {
    await writeFile(file, content, { flag: 'wx' });
  } catch(err) {
    console.log(err);
    throw new Error(error);
  }
};

await create();
