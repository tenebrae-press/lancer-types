import path from 'path';

export const defaultConversionPath = path.resolve('.', 'deps', 'vscode-comp-con-content-authoring', 'schemas');

export const defaultOutputPath = path.resolve('.', 'src');

export const bail = err => {
    console.error(err);
    process.exit(1);
};
