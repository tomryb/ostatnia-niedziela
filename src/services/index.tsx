import { ConfigInterface } from './interfaces';
import { RootStoreSingleton } from './RootStoreService';

import path from 'path';

export let config: ConfigInterface = {};

if (window.__config) {
  console.log('Taking config from XHR config file');
  config = window.__config;
} else {
  console.warn('Missing "window" config object, will try to import dynamically from src/config directory');
  try {
    console.log('Importing config from local file \n\n');
    console.log(__dirname, __filename, path.resolve(__filename), path.resolve(__dirname));
    console.log('\n\n');

    config = require('config');
  } catch (error) {
    console.error('Cannot import config file');
  }
}

export const rootStore = RootStoreSingleton.getInstance(config);

export default {
  config,
};
