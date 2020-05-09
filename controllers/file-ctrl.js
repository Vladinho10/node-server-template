'use strict';
const config = require('../config');

class FileCtrl {
    static actionDownload(req, res) {
        const { fileName } = req.params;
        const fromFilePath = `${config.filesDir}/${fileName}`;

        res.download(fromFilePath);
    }

    static async actionUpload(req, res) {
        const { file } = req;
        const filePath = (file && file.path) || `${config.files}/lake.jpg`;

        res.sendFile(filePath);
    }
}

module.exports = {
    FileCtrl
};

