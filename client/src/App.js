import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAffirmation } from './Redux/affirmationsRedux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchAffirmation()), [dispatch]);
  return (
    <h1>Hello world</h1>
  );
};

export default App;