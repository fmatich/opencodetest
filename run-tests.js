const { spawnSync } = require('node:child_process');

const tests = ['tests/check-title.js', 'tests/check-h1.js'];
let failed = false;

for (const test of tests) {
  const result = spawnSync(process.execPath, [test], { stdio: 'inherit' });
  if (result.status !== 0) failed = true;
}

process.exit(failed ? 1 : 0);
