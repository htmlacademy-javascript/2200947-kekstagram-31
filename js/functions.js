//функция подсчета ID
const createId = () => {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
};

//функция случайного целого числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {createId, getRandomInteger, getRandomArrayElement};
