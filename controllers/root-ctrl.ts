'use strict';
class RootCtrl {
    static async getMany(req, res) {
        return res.ok({ message: 'get all data' });
    }

    static async post(req, res) {
        return res.created({ message: 'create new data' });
    }

    static async showEjs(req, res) {
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

export {
    RootCtrl,
};
