import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { fetchPokemon, register } from './actions';
import encryptPayload from '@utils/encryptionHelper';

import { selectPokemon } from './selectors';

const Home = ({ pokemon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  const onChangeHandler = (value, type) => {
    setUser({
      ...user,
      [type]: value
    })
  }

  const onSubmit = () => {
    const dataUser = {
      fullname: encryptPayload(user.fullname),
      email: encryptPayload(user.email),
      password: encryptPayload(user.password),
    }
    dispatch(register(
      dataUser,
      () => {
        console.log("Callback success");
        navigate('/login');
      },
      (error) => {
        console.log(error);
      }
    ))
  }

  return (
    <div>
      <input onChange={(e) => onChangeHandler(e.target.value, 'fullname')} placeholder='fullname' />
      <input onChange={(e) => onChangeHandler(e.target.value, 'email')} placeholder='email' />
      <input onChange={(e) => onChangeHandler(e.target.value, 'password')} placeholder='password' />
      <button onClick={() => onSubmit()}>Submit</button>
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
