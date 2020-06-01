'use strict';
const configs = require('../configs');

class FileCtrl {
    static actionDownload(req, res) {
        const { fileName } = req.params;
        const fromFilePath = `${configs.filesDir}/${fileName}`;

        return res.download(fromFilePath);
    }

    static async actionUpload(req, res) {
        const { file } = req;
        const filePath = (file && file.path) || `${configs.files}/lake.jpg`;

        return res.sendFile(filePath);
    }
}

module.exports = {
    FileCtrl,
};

