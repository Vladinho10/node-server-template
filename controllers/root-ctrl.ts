import { Request, Response } from 'express';

export class RootCtrl {
    static async getMany(req: Request, res: Response) {
        res.send({ message: 'get all data' });

        return;
    }
    static async post(req: Request, res: Response) {
        res.status(201).send({ message: 'create new data' });

        return;
    }
    static async showEjs(req: Request, res: Response) {
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

        return;
    }
}
