import { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { fetchPokemon } from './actions';
import { selectPokemon } from './selectors';

import classes from './style.module.scss';

const Home = ({ pokemon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPokemon())
  }, [dispatch]);

  return (
    <div className={classes.home}>
      <div className={classes.homeWrapper}>
        <h1 className={classes.title}>
          <FormattedMessage id="app_greeting" />
        </h1>
        <div className={classes.lengthWrapper}>
          <div className={classes.length}>
            {pokemon.length}++
          </div>
        </div>
        <div className={classes.buyNow} onClick={() => navigate('/courses')}>
          <FormattedMessage id="navigate_to_product_texts" />
        </div>
        {pokemon?.map((item) => {
          return <Cards />
        })}
      </div>
    </div>
  );
};

Home.propTypes = {
  pokemon: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  pokemon: selectPokemon
});

export default connect(mapStateToProps)(Home);
