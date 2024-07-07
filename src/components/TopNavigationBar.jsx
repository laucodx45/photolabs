import React from 'react';

import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import '../styles/TopNavigationBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faBars } from '@fortawesome/free-solid-svg-icons'
import { applicationContext } from 'hooks/applicationContext';
import { useContext } from 'react';

const TopNavigation = () => {
  const {dispatch, state} = useContext(applicationContext);
  const {favouritePhotos} = state;
  const isFavPhotoExist = favouritePhotos.length !== 0 ? favouritePhotos : false;

  const toogleDarkMode = () => {
    dispatch({type:'SET_DARKMODE'});
  }

  const toogleDropdownMenu = () =>{
    dispatch({type:'SET_DROPDOWN_MENU'})
  }

  return (
    <div className="top-nav-bar">
      {/* onClick top-nav-bar, it resets the topic to null, which display unfiltered photos */}
      <span className="top-nav-bar__logo" onClick={ () => dispatch({type: 'SELECT_TOPIC', payload: null})}>PhotoLabs</span>
      <TopicList dispatch={dispatch} state={state} className="topiclist-nav"/>
      <FontAwesomeIcon className="moon" icon={faMoon} onClick={toogleDarkMode}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
      <FontAwesomeIcon className="menu-icon" icon={faBars} onClick={toogleDropdownMenu}/>
    </div>
  )
}

export default TopNavigation;