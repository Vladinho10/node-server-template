const isEmptyArray = (arr: never[]): boolean => !Array.isArray(arr) || !arr.length;
const getRandomItem = (arr: never[]) => arr[Math.floor(Math.random() * arr.length)];
const multiplyItems = (numArray: number[]) => numArray.reduce((acc, val) => acc * val, 1);
const sliceIntoChunks = (arr: never[], chunkSize: number) => {
    const res = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }

    return res;
};

const arrays = {
    isEmptyArray,
    getRandomItem,
    multiplyItems,
    sliceIntoChunks,
};

export { arrays };
