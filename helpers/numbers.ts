const isNumber = (arg: unknown): boolean => typeof arg === 'number' && !Number.isNaN(arg);
const getRandomInt = (max: number, min = 0): number => Math.floor((Math.random() * (max - min + 1)) + min);
const prettifyNumber =  (num: number): string => `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const numbers = {
    isNumber,
    getRandomInt,
    prettifyNumber,
};

export { numbers };
