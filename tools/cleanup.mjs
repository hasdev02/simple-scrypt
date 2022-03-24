import fs from 'fs';
import Path from 'path';
import { fileURLToPath } from 'url';

const name = process.argv.slice(2)[0];

const removeDir = (name) => {
	fs.rmSync(Path.join(Path.dirname(fileURLToPath(import.meta.url)), '../dist', name), { recursive: true, force: true });
};

if (name) {
	removeDir(name);
} else {
	for (const name of ['cjs', 'esm', 'types']) {
		removeDir(name);
	}
}
