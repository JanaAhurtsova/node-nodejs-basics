import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  try {
    const transformStream = new Transform({
      transform(data, _, callback) {
        const reverseData = data.toString().split('').reverse().join('');
        callback(null, reverseData);
      },
    });
  
    await pipeline(process.stdin, transformStream, process.stdout);
  } catch(err) {
    console.log(err);
  }
  
};

await transform();
