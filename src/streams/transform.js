import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  const transformStream = new Transform({
    transform(data, _, callback) {
      const reverseData = data.toString().split('').reverse().join('');
      callback(null, reverseData);
    },
  });

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
