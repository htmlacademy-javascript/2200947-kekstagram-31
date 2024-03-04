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
  'Пруд с высоты птичьего полета',
  'Указатель на пляж',
  'Прилив',
  'Девушка на пляже',
  'Блюдо азиатской кухни',
  'Черный автомобиль',
  'Клубничный дессерт',
  'Морс в двух стаканах',
  'Самолет над пляжем',
  'Обувница',
  'Песчаный пляж',
  'Белый ауди',
  'Салат по-азиатски',
  'КотоРолл',
  'Модные тапочки',
  'Над облаками',
  'Симфонический оркестр',
  'Ретро автомобиль',
  'Не спится',
  'Пальмы',
  'Салат с лаймом',
  'Закат над морем',
  'Краб',
  'Концерт',
  'Сафари на джипе'
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const PHOTO_POSTS = 25;
const MAX_COMMENTS = 30;
const MIN_NUMBER_AVATARS = 1;
const MAX_NUMBER_AVATARS = 6;

const createId = () => {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
};

const createIdPhoto = createId();
const createUrlPhoto = createId();
const descriptionIndex = createId();
const createIdUser = createId();

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// коментарии
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const comment = () => ({
  id: createIdUser(),
  avatar: `img/avatar-${getRandomInteger(MIN_NUMBER_AVATARS, MAX_NUMBER_AVATARS)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhotoPost = () => ({
  id: createIdPhoto(),
  url: `photos/${createUrlPhoto()}.jpg`,
  description:  PHOTOS_NAMES[descriptionIndex() - 1],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments:  Array.from({length:getRandomInteger(0, MAX_COMMENTS)}, comment)
});

const similarPhoto = Array.from({length: PHOTO_POSTS}, createPhotoPost);
