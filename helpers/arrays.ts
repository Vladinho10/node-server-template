const isEmptyArray = (arr: unknown[]): boolean => Array.isArray(arr) && (arr.length === 0);
const getRandomItem = <T>(arr: T[]): T => Array.isArray(arr) && arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : null;
const getFirstItem = <T>(arr: T[]): T => Array.isArray(arr) && arr.length > 0 ? arr[0] : null;
const getLastItem = <T>(arr: T[]): T => Array.isArray(arr) && arr.length > 0 ? arr[arr.length - 1] : null;
const getLastIndex = (arr: unknown[]): number => arr.length - 1;

const multiplyItems = (numArray: number[]): number => numArray.reduce((acc, val) => acc * val, 1);

const sliceIntoChunks = <T>(arr: T[], chunkSize: number): T[][] => {
    const res = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }

    return res;
};
const breakSegments = <T>(arr: T[], cpuCount: number): T[][] => {
    const segmentSize = Math.ceil(arr.length / cpuCount);
    const segments = [];

    for (let i = 0; i < cpuCount; i += 1) {
        const start = i * segmentSize;  // 0 * 10000
        const end = start + segmentSize;
        const segment = arr.slice(start, end);

        if (segment.length) {
            segments.push(segment);
        }
    }

    return segments;
};

const makeArrWithLength = (len = 100): number[] => [...Array(len).keys()].map(i => i + 1);

const arrays = {
    isEmptyArray,
    getFirstItem,
    getLastItem,
    getLastIndex,
    getRandomItem,
    multiplyItems,
    sliceIntoChunks,
    breakSegments,
    makeArrWithLength,
};

export { arrays };
