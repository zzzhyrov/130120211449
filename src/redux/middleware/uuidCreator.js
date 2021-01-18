import { v4 as uuidv4 } from 'uuid';

export default (state) => (next) => (action) => {
  if (action.type === 'ADD_REVIEW') {
    const newReviewId = uuidv4();
    const newUserId = uuidv4();

    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const dateNowFull = new Date().toLocaleDateString('ru-RU', options);
    const dateNow = dateNowFull.slice(0, dateNowFull.length - 3);

    ({ ...action.payload.values } = {
      id: newReviewId,
      userId: newUserId,
      date: dateNow,
      ...action.payload.values,
    });
  }

  next(action);
};
