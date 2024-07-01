import React, { useContext } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import Loader from 'components/Spinner';
import '../styles/HomeRoute.scss';
import { applicationContext } from 'hooks/applicationContext';

const HomeRoute = () => {
  const {state} = useContext(applicationContext);
  const modalState = state.modalState;
  const photoData = state.photoData;

  return (
    <div className="home-route">
      <TopNavigation />
      {/* if photoData length === 0, display spinner */}
      {photoData.length === 0 && <Loader/>}
      <PhotoList />
      {modalState && <PhotoDetailsModal />}
    </div>
  );
};

export default HomeRoute;
