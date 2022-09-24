import * as fs from 'fs';

const barrelExport = dirname => {
    const exportObject = fs.readdirSync(dirname)
        .reduce((acc, file) => {
            if (file !== 'index.js' && (file.slice(-3) === '.js')) {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                return Object.assign({}, acc, require(`${dirname}/${file}`));
            }

            return acc;
        }, {});

    return exportObject;
};

export { barrelExport };
