import * as esbuild from 'esbuild';
import * as path from 'path';
import * as fs from 'node:fs';
import { fileURLToPath } from 'url';

const baseDir = fileURLToPath(new URL('.', import.meta.url));

const extensionEntryPoints = [
  path.join(baseDir, 'src', 'background.ts'),
  path.join(baseDir, 'src', 'contentscript.ts'),
  path.join(baseDir, 'src', 'detect_remix.ts'),
];

// Building core script files
(async () => {
  await esbuild.build({
    entryPoints: extensionEntryPoints,
    bundle: true,
    minify: true,
    outdir: path.join(baseDir, 'dist'),
  });
})();

// Bundling react pages
const pages = ['popup', 'panel', 'devtools'];

async function bundleReact(input: string, output: string) {
  const inputPath = path.join(baseDir, 'src', `${input}`);
  const outputPath = path.join(baseDir, 'dist', `${output}`);

  await esbuild.build({
    entryPoints: [path.join(inputPath, `${input}.tsx`)],
    bundle: true,
    minify: true,
    loader: {
      '.tsx': 'tsx',
    },
    outdir: outputPath,
  });

  fs.copyFileSync(
    path.join(inputPath, `${input}.html`),
    path.join(outputPath, `${output}.html`),
  );
}

pages.forEach((page) => {
  bundleReact(page, page);
});

// Moving manifest.json and public folder to dist

(async function copyFolderSync(from, to) {
  // creates destination folders
  fs.mkdirSync(to, { recursive: true });
  // copy files and folders recursively
  fs.readdirSync(from).forEach((element) => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
})(path.join(baseDir, 'src', 'public'), path.join(baseDir, 'dist', 'public'));

fs.copyFileSync(
  path.join(baseDir, 'src', 'manifest.json'),
  path.join(baseDir, 'dist', 'manifest.json'),
);
