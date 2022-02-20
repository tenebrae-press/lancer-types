import fs from 'fs/promises';
import path from 'path';
import { promisify } from 'util';


import yargs from 'yargs';
import { compileFromFile } from 'json-schema-to-typescript';
import mkdirp from 'mkdirp';
import _rimraf from 'rimraf';

const rimraf = promisify(_rimraf);

import { bail, defaultConversionPath, defaultOutputPath } from './common.js';

const buildTypingsFromSchema = async ({schemaDir, outputPath}) => {
    try {
        await fs.stat(schemaDir);
    } catch (err) {
        bail(`Can't stat schema directory ${schemaDir}, error: ${err}`);
    }

    await rimraf(outputPath);
    await mkdirp(outputPath);

    const schemaFiles = (await fs.readdir(schemaDir))
        .filter(handle => handle.includes('.json'));
    for (const schemaFile of schemaFiles) {
        const content = await compileFromFile(path.join(schemaDir, schemaFile), { bannerComment: '', cwd: schemaDir });
        await fs.writeFile(path.join(outputPath, schemaFile.replace('.schema.json', '.ts')), content, { flag: 'w' });
    }
};

(async () => {
    const argv = await yargs(process.argv)
    .scriptName('convert-from-schema')
    .usage('npm run convert-from-schema [options]')
    .option('schemas', {
        type: 'string',
        describe: 'Path to the schema files to be converted'
    })
    .option('out', {
        type: 'string',
        describe: 'Output directory to write the converted schemas to'
    })
    .help()
    .argv;

    await buildTypingsFromSchema({
        schemaDir: argv.schemas ?? defaultConversionPath,
        outputPath: argv.out ?? defaultOutputPath
    });
})();
