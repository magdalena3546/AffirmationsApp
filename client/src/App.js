import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAffirmation } from './Redux/affirmationsRedux';
import './styles/global.scss';
import IntroText from './components/views/IntroText/IntroText';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchAffirmation()), [dispatch]);
  return (
    <div className='container'>
      <IntroText />
    </div>
  );
};

export default App;