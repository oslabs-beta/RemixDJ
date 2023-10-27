import esbuild from 'esbuild';
import path from 'path';
import fs from 'fs';

const extensionEntryPoints = [
  path.join(__dirname, 'src', 'background.ts'),
  path.join(__dirname, 'src', 'contentscript.ts'),
  path.join(__dirname, 'src', 'detect_remix.ts'),
];

// Building core script files
(async () => {
  await esbuild.build({
    entryPoints: extensionEntryPoints,
    bundle: true,
    minify: true,
    outdir: path.join(__dirname, 'dist'),
  });
})();

// Bundling react pages
const pages = ['popup', 'panel', 'devtools'];

async function bundleReact(input, output) {
  const inputPath = path.join(__dirname, 'src', `${input}`);
  const outputPath = path.join(__dirname, 'dist', `${output}`);

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
fs.copyFileSync(
  path.join(__dirname, 'src', 'manifest.json'),
  path.join(__dirname, 'dist', 'manifest.json'),
);

const publicFolder = path.join(__dirname, 'src', 'public');
const distFolder = path.join(__dirname, 'dist');

(async function copyFolderSync(from, to) {
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach((element) => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
})(publicFolder, path.join(distFolder, 'public'));
