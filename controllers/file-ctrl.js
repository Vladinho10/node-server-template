'use strict';
const configs = require('../configs');

class FileCtrl {
    static download(req, res) {
        const { fileName } = req.params;
        const fromFilePath = `${configs.files}/${fileName}`;

        return res.download(fromFilePath);
    }

    static async upload(req, res) {
        const { file } = req;
        const filePath = (file && file.path) || `${configs.files}/lake.jpg`;

        return res.sendFile(filePath);
    }
}

module.exports = {
    FileCtrl,
};

