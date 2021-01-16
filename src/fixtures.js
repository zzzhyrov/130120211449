const managers = [
  {
    id: 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2',
    name: 'Вероника Ростова',
    position: 'Менеджер по продажам',
    description:
      'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны',
    services: {
      'Ручное бронирование': 11,
      'Пакетные туры': 3,
      Отели: 1,
    },
    image: '#',
    reviews: [
      '5909796d-5030-4e36-adec-68b8f9ec2d96',
      '429dea85-11dd-4054-a31e-c60c92e17255',
      '1547335a-ea18-4547-a73d-32bd6e9f651c',
    ],
  },
];

const reviews = [
  {
    id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
    userId: 'a304959a-76c0-4b34-954a-b38dbf310360',
    text: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!',
    date: '13.11.2011',
  },
  {
    id: '429dea85-11dd-4054-a31e-c60c92e17255',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14.11.2011',
  },
  {
    id: '1547335a-ea18-4547-a73d-32bd6e9f651c',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text:
      'Id laborum reprehenderit consectetur sit. Veniam eu duis cillum fugiat incididunt nisi exercitation ipsum magna voluptate. Nostrud exercitation ipsum ipsum anim aute adipisicing exercitation minim. Minim reprehenderit eu deserunt labore sit occaecat consequat reprehenderit irure ad do.',
    date: '14.11.2011',
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
