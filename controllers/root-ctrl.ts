import Express from "express";

export class RootCtrl {
    static async getMany(req:Express.Request, res:Express.Response) {
        return res.send({ message: 'get all data' });
    }

    static async post(req:Express.Request, res:Express.Response) {
         return res.created({ message: 'create new data' });
    }

    static async showEjs(req:Express.Request, res:Express.Response) {
        // io.on('connection', socket => {
        //     io.removeAllListeners();
        //     logger.info('a user connected');
        //
        //     socket.on('chat message', msg => {
        //         logger.info({ msg });
        //
        //         io.emit('chat message', msg);
        //     });
        // });

        res.render('home-page', {
            origin: `${req.protocol}://${req.get('host')}`,
            name: req.query.name || 'Eva',
        });
    }
}
