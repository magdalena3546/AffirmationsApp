import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAffirmation } from './Redux/affirmationsRedux';
import './styles/global.scss';
import Home from './components/pages/Home/Home';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchAffirmation()), [dispatch]);
  return (
    <div className='container'>
      <div className='moon'></div>
      <Home />
    </div>
  );
};

export default App;