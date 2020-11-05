'use strict';

const removeDuplicates = async (model, duplicateCriteria = []) => {
    const response = await model.aggregate([
        {
            $match: { _id: { $ne: '' } }, // find all documents
        },
        {
            $group: {
                _id: duplicateCriteria.reduce((obj, item) => {
                    obj[item] = `$${item}`; return obj;
                }, {}), // // group criteria
                ids: { $addToSet: '$_id' }, // get a field
                count: { $sum: 1 }, // how many docs are grouped
            },
        },
        {
            $match: { count: { $gt: 1 } },    // Duplicates considered as count greater than one
        },
    ]).allowDiskUse(true); // for heavy requests

    const duplicates = [];

    response.forEach(doc => {
        doc.ids.pop(); // saving only the last of the duplicates documents
        doc.ids.forEach(id => duplicates.push(id));  // Getting all duplicate ids);
    });

    await model.deleteMany({ _id: { $in: duplicates } });
};

const mongoRequests = {
    removeDuplicates,
};

module.exports = { mongoRequests };
