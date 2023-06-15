import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';
import { cpus } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileWorker = path.resolve(__dirname, './worker.js');

const performCalculations = async () => {
  let startNumber = 10;
  const cpuCores = cpus();

  const workerResult = await Promise.allSettled(cpuCores.map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(fileWorker, { workerData: startNumber++ });
      worker.on('message', resolve);
      worker.on('error', reject);
    });
  }));
  
  const result = workerResult.map(({ status, value }) => ({
    status: status === 'rejected' ? 'error' : 'resolved',
    data: status === 'rejected' ? null : value
  }));

  console.log(result);
};

await performCalculations();
