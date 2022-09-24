import { Model } from 'mongoose';

const removeDuplicates = async (model: Model<Document>, duplicateCriteria = []) => {
    /**
     * response includes
     * _id - a document with duplicateCriteria fields
     * ids - an array with duplicate docs' _ids
     * count - the duplicate docs count
     */
    const response = await model.aggregate([
        {
            $match: { _id: { $ne: '' } }, // find all documents
        },
        {
            $group: {
                _id: duplicateCriteria.reduce((obj, item) => {
                    obj[item] = `$${item}`;

                    return obj;
                }, {}), // // group criteria
                ids: { $addToSet: '$_id' }, // get a field (set to response's ids key)
                count: { $sum: 1 }, // how many docs are grouped (set to response's count key)
            },
        },
        {
            $match: { count: { $gt: 1 } },    // Duplicates considered as count greater than one
        },
    ]).allowDiskUse(true); // for heavy requests

    const duplicateIds = [];

    response.forEach(doc => {
        doc.ids.pop(); // saving only the last of the duplicates documents
        doc.ids.forEach(id => duplicateIds.push(id));  // Getting all duplicate ids);
    });

    await model.deleteMany({ _id: { $in: duplicateIds } });
    // logger.info(`deleted ${duplicateIds.length} duplicates`);
};

const mongoRequests = {
    removeDuplicates,
};

export { mongoRequests };
