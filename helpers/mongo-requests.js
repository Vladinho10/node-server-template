'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(resolve => {
            resolve(value);
        });
    }
    return new (P || (P = Promise))((resolve, reject) => {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent() {
            if (t[0] & 1) {
                throw t[1];
            } return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) {
            throw new TypeError('Generator is already executing.');
        }
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) {
                    return t;
                }
                if (y = 0, t) {
                    op = [op[0] & 2, t.value];
                }
                switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0; continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1]; break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1]; t = op; break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2]; _.ops.push(op); break;
                    }
                    if (t[2]) {
                        _.ops.pop();
                    }
                    _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e]; y = 0;
            } finally {
                f = t = 0;
            }
        }
        if (op[0] & 5) {
            throw op[1];
        } return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.mongoRequests = void 0;
var removeDuplicates = function (model, duplicateCriteria) {
    if (duplicateCriteria === void 0) {
        duplicateCriteria = [];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var response, duplicateIds;
        return __generator(this, _a => {
            switch (_a.label) {
            case 0: return [4 /* yield*/, model.aggregate([
                {
                    $match: { _id: { $ne: '' } },
                },
                {
                    $group: {
                        _id: duplicateCriteria.reduce((obj, item) => {
                            obj[item] = '$'.concat(item);
                            return obj;
                        }, {}),
                        ids: { $addToSet: '$_id' },
                        count: { $sum: 1 },
                    },
                },
                {
                    $match: { count: { $gt: 1 } },
                },
            ]).allowDiskUse(true)];
            case 1:
                response = _a.sent();
                duplicateIds = [];
                response.forEach(doc => {
                    doc.ids.pop(); // saving only the last of the duplicates documents
                    doc.ids.forEach(id => duplicateIds.push(id)); // Getting all duplicate ids);
                });
                return [4 /* yield*/, model.deleteMany({ _id: { $in: duplicateIds } })];
            case 2:
                _a.sent();
                return [2];
            }
        });
    });
};
var mongoRequests = {
    removeDuplicates,
};
exports.mongoRequests = mongoRequests;
