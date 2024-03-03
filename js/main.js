//Комментарии
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Даша',
  'Таня',
  'Коля',
  'Вася',
  'Петя',
  'Федя'
];

const PHOTOS_NAMES = [
  'Море',
  'Море утром',
  'Море вечером',
  'Море днем',
  'Море ночью',
  'Горы',
  'Горы утром',
  'Горы вечером',
  'Горы днем',
  'Горы ночью',
  'Лес',
  'Лес утром',
  'Лес вечером',
  'Лес днем',
  'Лес ночью',
  'Поле',
  'Поле утром',
  'Поле вечером',
  'Поле днем',
  'Поле ночью',
  'Озеро',
  'Озеро утром',
  'Озеро вечером',
  'Озеро днем',
  'Озеро ночью'
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

let id = 0;
let photoId = 0;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// коментарии

const comment = () => {
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);
  id ++;

  return {
    id: id,
    avatar: 'img/avatar-' + getRandomInteger(1, 6),
    message: MESSAGES[randomMessageIndex],
    name: NAMES[randomNameIndex],
  };
};

//Фотографии

const photo = () => {

  photoId ++;

  return {
    id: photoId,
    url: 'photos/' + photoId + '.jpg',
    description: PHOTOS_NAMES[photoId - 1],
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: (getRandomInteger(0, 30))}, comment),
  };

};

const photos = Array.from({length: 25}, photo);
