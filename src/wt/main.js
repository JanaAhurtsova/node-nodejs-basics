import { Worker } from 'worker_threads';
import { getPath } from '../libs/paths.js';
import { cpus } from 'os';

const fileWorker = getPath(import.meta.url, './worker.js');

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
