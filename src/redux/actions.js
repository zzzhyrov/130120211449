import { ADD_REVIEW } from './constants';

export const addReview = (values, activeManagerId) => ({
  type: ADD_REVIEW,
  payload: {
    values,
    activeManagerId,
  },
});
