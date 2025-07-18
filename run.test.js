
import { spawn } from 'node:child_process';

const jest = spawn('node', [
  '--experimental-vm-modules',
  './node_modules/jest/bin/jest.js'
], { stdio: 'inherit' });

jest.on('close', (code) => {
  process.exit(code);
});
