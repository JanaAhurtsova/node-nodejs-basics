import { argv } from 'node:process';
import { PREFIX_ARGS } from '../constants/Constants.js';

const parseArgs = () => {
  const formattedArr = argv.reduce((acc, value, index, arr) => {
    if(value.startsWith(PREFIX_ARGS)) {
      const formattedArgs = `${value.replace(PREFIX_ARGS, '')} is ${arr[index + 1]}`;
      return [...acc, formattedArgs];
    }
    return acc;
  }, []);

  const str = formattedArr.join(', ');
  console.log(str);
};

parseArgs();
