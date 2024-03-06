import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
// Check if state.photoData = []; if it is empty, state.filterPhotoData contains filter photos
// nav bar should not display topic options
const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();

  return (
    <div className='App' data-theme={!state.darkMode ? '': 'dark'} >
      <HomeRoute dispatch={dispatch} state={state} />
    </div>

  );
};

export default App;
