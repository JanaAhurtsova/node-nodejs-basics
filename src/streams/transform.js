import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  try {
    const transformStream = new Transform({
      transform(data, _, callback) {
        const reverseData = data.toString().split('').reverse().join('');
        callback(null, reverseData+'\n');
      },
    });
  
    await pipeline(process.stdin, transformStream, process.stdout);
  } catch(err) {
    console.error(err);
    process.exitCode = 1;
  }
  
};

await transform();
