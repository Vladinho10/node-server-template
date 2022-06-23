import * as configs from '../configs/index';

class FileCtrl {
    static download(req, res) {
        const { remote } = req.query;
        const { fileName } = req.params;
        const fromFilePath = remote ? remote : `${configs.files}/${fileName}`;

        return res.download(fromFilePath);
    }

    static async upload(req, res) {
        const { file } = req;
        const filePath = (file && file.path) || `${configs.files}/lake.jpg`;

        return res.sendFile(filePath);
    }
}

export {
    FileCtrl,
};

