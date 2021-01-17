import { managers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultManagers = managers.reduce(
  (acc, manager) => ({
    ...acc,
    [manager.id]: manager,
  }),
  {}
);

export default (managers = defaultManagers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW: {
      const addedNewReview = payload.values.id;
      const activeManagerId = payload.activeManagerId.activeManagerId;
      const activeManagerData = managers[activeManagerId];

      return {
        ...managers,
        [activeManagerId]: {
          ...activeManagerData,
          ...activeManagerData.reviews.push(addedNewReview),
        },
      };
    }
    default:
      return managers;
  }
};
