'use strict';
const { User } = require('../dal/models');
const { JwtSrv } = require('../services');
const { errorMessages } = require('../constants');
const { objects } = require('../helpers');

const auth = authType => async (req, res, next) => {
    const verifiedData = JwtSrv.verify(req.headers.token);

    if (objects.isEmptyObject(verifiedData)) {
        return res.unauthorized({ errors: [{
            message: errorMessages.UNAUTHORIZED,
        }] });
    }

    const user = await User.findOne({ where: { id: verifiedData.id }, raw: true });

    if (!user && (authType !== 'optional')) {
        return res.unauthorized({ errors: [{
            message: errorMessages.UNAUTHORIZED,
        }] });
    }

    req.user = user || {};

    next();
};

module.exports = auth;
