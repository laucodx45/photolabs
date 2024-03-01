import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos, favouritePhotos, dispatch} = props;

  // if photoData is not an array
  // user is in modal view, render similar photos
  let photosData = []
  if (Array.isArray(photos)) {
    photosData = [...photos]
  } else {
    photosData = Object.values(photos)
  }

  const photoItems = photosData.map((photo) => {
    return <PhotoListItem similarPhotos ={photo.similar_photos} dispatch={dispatch} favouritePhotos={favouritePhotos} key={photo.id} photoId={photo.id} imageSource={photo.urls.regular} profile={photo.user.profile} username={photo.user.username} location={photo.location}/>
  })

  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;
