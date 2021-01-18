import { React } from 'react';

import useForm from '../../../hooks/use-form';

import { connect } from 'react-redux';
import { addReview } from '../../../redux/actions';

import styles from './review-form.module.css';

const INITIAL_VALUES = { name: 'Аноним', text: '' };

const ReviewForm = ({ onSubmit, onKeyDown }) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);

  const handleSubmitByButtonClick = (ev) => {
    ev.preventDefault();
    onSubmit(values);
    reset();
  };

  const handleSubmitByOnKeyDown = (ev) => {
    if (ev.key === 'Enter' && ev.ctrlKey) {
      onSubmit(values);
      reset();
    }
  };

  return (
    <div className={styles.reviewFormContainer}>
      <form onSubmit={handleSubmitByButtonClick} className={styles.reviewForm}>
        <textarea
          className={styles.message}
          onKeyDown={handleSubmitByOnKeyDown}
          {...handlers.name}
          {...handlers.text}
        />
        <div>
          <button className={styles.submitButton}>Написать консультанту</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: (values) => {
    dispatch(addReview(values, props.activeManagerId));
  },
});

export default connect(null, mapDispatchToProps)(ReviewForm);
