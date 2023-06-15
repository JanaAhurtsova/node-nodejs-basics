import { env } from 'node:process';
import { PREFIX_ENV } from '../constants/Constants.js';

const parseEnv = () => {
  const formattedArr = Object.entries(env).reduce((acc, [key, value]) => {
    if(key.startsWith(PREFIX_ENV)) {
      const formattedPairs = `${key}=${value}`;
      return [...acc, formattedPairs];
    }

    return acc;
  }, []);
  const str = formattedArr.join('; ');
  console.log(str);
};

parseEnv();
