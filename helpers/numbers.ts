const getRandomInt = (max: number, min = 0): number => Math.floor((Math.random() * (max - min + 1)) + min);
const prettifyNumber =  (num: number) => `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const numbers = {
    getRandomInt,
    prettifyNumber,
};

export { numbers };
