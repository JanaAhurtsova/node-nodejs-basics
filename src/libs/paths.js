import path from 'path';
import { fileURLToPath } from 'url';

export const getPath = (metaUrlPath, myPath) => {
  const __filename = fileURLToPath(metaUrlPath);
  const __dirname = path.dirname(__filename);
  const files = path.resolve(__dirname, myPath);
  return files;
};
