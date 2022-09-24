import * as configs from '../configs/index';
import Express from 'express';

export class FileCtrl {
    static download(req:Express.Request, res:Express.Response) {
        const { remote } = req.query;
        const { fileName } = req.params;
        const fromFilePath = remote ? remote.toString() : `${configs.files}/${fileName}`;

        return res.download(fromFilePath);
    }

    static async upload(req:Express.Request, res:Express.Response) {
        const { file }: any = req;
        const filePath: string = (file && file.path) || `${configs.files}/lake.jpg`;

        return res.sendFile(filePath);
    }
}

