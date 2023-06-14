import { Worker, workerData } from 'worker-thread';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileWorker = path.resolve(__dirname, './worker.js');

const performCalculations = async () => {
  const worker = new Worker(fileWorker, { workerData });
  
};

await performCalculations();
