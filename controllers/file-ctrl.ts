import { Request } from 'express';

import * as configs from '../configs';
import { CustomResponse } from '../middlewares/respond';

export class FileCtrl {
    static download(req: Request, res: CustomResponse) {
        const { remote } = req.query;
        const { fileName } = req.params;
        const fromFilePath = remote ? remote.toString() : `${configs.files}/${fileName}`;

        return res.download(fromFilePath);
    }

    static async upload(req, res: CustomResponse) {
        const { file } = req;
        const filePath: string = (file && file.path) || `${configs.files}/lake.jpg`;

        return res.sendFile(filePath);
    }
}

