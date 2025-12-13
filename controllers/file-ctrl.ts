import { Request, Response } from 'express';

import * as configs from '../configs';

export class FileCtrl {
    static download(req: Request, res: Response) {
        const { remote } = req.query;
        const { fileName } = req.params;
        const fromFilePath = remote ? remote.toString() : `${configs.files}/${fileName}`;

        return res.download(fromFilePath);
    }
    static async upload(req: Request, res: Response) {
        const { file } = req;
        const filePath: string = (file && file.path) || `${configs.files}/lake.jpg`;

        return res.sendFile(filePath);
    }
}

