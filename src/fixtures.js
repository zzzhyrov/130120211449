const managers = [
  {
    id: 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2',
    name: 'Вероника Ростова',
    position: 'Менеджер по продажам',
    description:
      'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны',
    services: {
      bookings: 11,
      tours: 3,
      hotels: 1,
    },
    image: './images/photo.png',
    reviews: [
      '1d6733df-46ed-4ae9-8697-56209d1e62c6',
      'cae789ff-7dbf-4077-9bd2-7e267bc362b4',
      '08978306-b126-41fb-8404-817552dc186c',
      'fd903ccc-d1b2-4bd2-b798-a4db1096e4f5',
      '5eac28cb-dbee-4b8c-8c95-9903846dc28b',
      'fe20e340-c92c-4e82-bf04-7fd23ac99911',
      '0e886f7b-3168-41d4-935e-decd54c5dc4c',
      'c354f0f1-e060-4412-a9a0-deace73cb547',
      '85dc93f1-b8a5-4d65-bb69-d4af1b5dd320',
      'd700e34d-ff0b-4238-9d96-45b39be45785',
      'f4441fa5-d212-46a2-8cd0-b11c991dfdc4',
      '5909796d-5030-4e36-adec-68b8f9ec2d96',
      '429dea85-11dd-4054-a31e-c60c92e17255',
      '1547335a-ea18-4547-a73d-32bd6e9f651c',
    ],
    likes: 131,
  },
];

const reviews = [
  {
    id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
    userId: 'a304959a-76c0-4b34-954a-b38dbf310360',
    text: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!',
    date: '13 октября 2011',
  },
  {
    id: '429dea85-11dd-4054-a31e-c60c92e17255',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
  {
    id: '1547335a-ea18-4547-a73d-32bd6e9f651c',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Id laborum reprehenderit consectetur sit. Veniam eu duis cillum fugiat incididunt nisi exercitation ipsum magna voluptate. Nostrud exercitation ipsum ipsum anim aute adipisicing exercitation minim. Minim reprehenderit eu deserunt labore sit occaecat consequat reprehenderit irure ad do.',
    date: '14 октября 2011',
  },
  {
    id: '1d6733df-46ed-4ae9-8697-56209d1e62c6',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
  {
    id: 'cae789ff-7dbf-4077-9bd2-7e267bc362b4',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
  {
    id: '08978306-b126-41fb-8404-817552dc186c',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
  {
    id: 'fd903ccc-d1b2-4bd2-b798-a4db1096e4f5',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
  {
    id: '5eac28cb-dbee-4b8c-8c95-9903846dc28b',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
  {
    id: 'fe20e340-c92c-4e82-bf04-7fd23ac99911',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
  {
    id: '0e886f7b-3168-41d4-935e-decd54c5dc4c',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
  {
    id: 'c354f0f1-e060-4412-a9a0-deace73cb547',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
  {
    id: '85dc93f1-b8a5-4d65-bb69-d4af1b5dd320',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
  {
    id: 'd700e34d-ff0b-4238-9d96-45b39be45785',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
  {
    id: 'f4441fa5-d212-46a2-8cd0-b11c991dfdc4',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
  },
];

const users = [
  {
    id: 'a304959a-76c0-4b34-954a-b38dbf310360',
    name: 'Самуил',
  },
  {
    id: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    name: 'Вероника Семёновна',
  },
];

export { managers, reviews, users };
