import { Request } from 'express';

import { CustomResponse } from '../middlewares/respond';

export class RootCtrl {
    static async getMany(req: Request, res: CustomResponse) {
        return res.send({ message: 'get all data' });
    }

    static async post(req: Request, res: CustomResponse) {
        return res.created({ message: 'create new data' });
    }

    static async showEjs(req: Request, res: CustomResponse) {
        globalThis.io.on('connection', socket => {
            globalThis.io.removeAllListeners();
            globalThis.logger.info('a user connected');

            socket.on('chat message', msg => {
                globalThis.logger.info({ msg });

                globalThis.io.emit('chat message', msg);
            });
        });

        res.render('home-page', {
            origin: `${req.protocol}://${req.get('host')}`,
            name: req.query.name || 'Eva',
        });
    }
}
