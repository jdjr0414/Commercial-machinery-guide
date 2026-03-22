/**
 * Generates auto-pages-2.mjs from defs-base + defs-append — run: node gen-more.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { DEFS_BASE } from './defs-base.mjs';
import { DEFS_APPEND } from './defs-append.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DEFS = [...DEFS_BASE, ...DEFS_APPEND];

function fmt(obj) {
  return JSON.stringify(obj, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : '  ' + line))
    .join('\n');
}

const body = `import { make } from './page-factory.mjs';

export const MORE = [
${DEFS.map((d) => `  make(${fmt(d)}),`).join('\n')}
];
`;

fs.writeFileSync(path.join(__dirname, 'auto-pages-2.mjs'), body, 'utf8');
console.log('Wrote auto-pages-2.mjs with', DEFS.length, 'pages');
