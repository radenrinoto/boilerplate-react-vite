import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import classes from './style.module.scss';

const Cards = ({ course, id, onClick }) => {
  const navigate = useNavigate();

  return (
    <div data-testid="cards-container" className={!course.is_close ? classes.card : `${classes.card} ${classes.disabled}`}>
      <img src={course.image} alt={course?.title} />
      <div data-testid="card-description" className={classes.cardDesc}>
        <div className={classes.desc}>
          <div className={classes.title}>{course?.title}</div>
          <div className={classes.description}>{course?.description}</div>
          <div>{course?.courseInstructor?.fullName}</div>
          <div>Rp.{course?.price?.toLocaleString()}</div>
          <div className={classes.participate}>Max Participant {course?.max_participants}</div>
        </div>
        {course?.is_close ? null : (
          <div data-testid="navigate-button" className={classes.detail} onClick={() => navigate(`/courses/${id}`)}>
            Detail Course
          </div>
        )}
        <button data-testid="button-submit" onClick={onClick}>Submit</button>
        <Button data-testid="button-mui" onClick={onClick}>BUTTON</Button>
      </div>
    </div>
  );
};

Cards.propTypes = {
  course: PropTypes.object,
  id: PropTypes.number,
  onClick: PropTypes.func
};

export default Cards;
