import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect,useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { fetchPokemon, register } from './actions';

// import { ping } from '@containers/App/actions';
import { selectPokemon } from './selectors';

const Home = ({ pokemon }) => {
  const dispatch = useDispatch();
  const text = '<h1>Title</h1>'
  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  const onSubmit = () => {
    const dataUser = {
      email: 'asd',
      fullname: 'asd',
      password: 'asdsad'
    }
    dispatch(register(dataUser))
  }

  return (
    <div>
      {/* <FormattedMessage id="app_greeting" /> */}
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <FormattedMessage id="register_title_text" />
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
