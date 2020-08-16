'use strict';
class RootCtrl {
    static async getMany(req, res) {
        return res.ok('get all data');
    }

    static async post(req, res) {
        return res.created('create new data');
    }

    static async showEjs(req, res) {
        io.on('connection', socket => {
            io.removeAllListeners();
            console.log('a user connected');

            socket.on('chat message', msg => {
                console.log({ msg });

                io.emit('chat message', msg);
            });
        });

        res.render('homePage', {
            origin: `${req.protocol}://${req.get('host')}`,
            name: req.query.name || 'Eva',
        });
    }
}

module.exports = {
    RootCtrl,
};
