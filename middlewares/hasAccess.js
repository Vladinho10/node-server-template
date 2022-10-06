'use strict';
const { errorMessages } = require('../constants');

const hasAccess = (Model, field) => async (req, res, next) => {
    const data = await Model.findOne({ where: { [field]: req.user.id, id: req.params._id }, raw: true });
    // const data = await Model.findOne({where: { id: req.params._id, [field]: req.user.id}, raw: true});

    if (!data) {
        return res.notFound({
            errors: [{
                message: errorMessages.NOT_FOUND,
            }],
        });
    }

    next();
};

module.exports = hasAccess;
