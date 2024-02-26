import React from 'react';
import { useReducer, useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation


const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal
  } = useApplicationData();

  const { favouritePhotos, modalState } = state;

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} modalState={modalState} setPhotoSelected={setPhotoSelected} favouritePhotos={favouritePhotos} updateToFavPhotoIds={updateToFavPhotoIds} onClosePhotoDetailsModal={onClosePhotoDetailsModal} />
    </div>
  );
};

export default App;
