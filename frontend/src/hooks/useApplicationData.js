import { useReducer, useEffect } from "react";
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_DARKMODE: 'SET_DARKMODE',
  SET_SEARCH_INPUT: 'SET_SEARCH_INPUT',
  SET_FILTER_PHOTO_DATA: 'SET_FILTER_PHOTO_DATA'
}

const initialState = {
  favouritePhotos : [],
  photoInfo : null,
  modalState : false,
  photoData: [],
  topicData: [],
  topicId: null,
  darkMode: false,
  searchInput: '',
  filterPhotoData: []
}

const useApplicationData = () => {

  const reducer = (state, action) => {
    switch(action.type) {
      case ACTIONS.FAV_PHOTO_ADDED: 
        return {
          ...state, 
          favouritePhotos: [...state.favouritePhotos, action.payload]
        }
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {
          ...state, 
          favouritePhotos: [...state.favouritePhotos.filter(photo => photo !== action.payload)]
        }
      case ACTIONS.SELECT_PHOTO: 
        return {
          ...state, 
          modalState : true,
          photoInfo : action.payload
        }
      case ACTIONS.CLOSE_MODAL:
        return {
          ...state,
          modalState : false,
          photoInfo : null
        }
      case ACTIONS.SET_PHOTO_DATA:
        return {
          ...state,
          photoData: action.payload
        }
      case ACTIONS.SET_TOPIC_DATA:
        return {
          ...state,
          topicData: action.payload
        }
      case ACTIONS.SELECT_TOPIC:
        return {
          ...state,
          topicId: action.payload
        }
      case ACTIONS.SET_DARKMODE:
        return {
          ...state,
          darkMode: !state.darkMode
        }
      case ACTIONS.SET_SEARCH_INPUT:
        return {
          ...state,
          searchInput: action.payload
        }
      case ACTIONS.SET_FILTER_PHOTO_DATA:
        return {
          ...state,
          photoData: [],
          filterPhotoData: action.payload
        }
      
      default:
        throw new Error (`Tried to reduce with unsupported action type: ${action.type}`);
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // axios.get('http://localhost:8001/api/photos')
    //   .then(res => dispatch({ type: 'SET_PHOTO_DATA', payload: res.data }))
    //   .catch(err => console.log(`Error: ${err}`))

    axios.get('http://localhost:8001/api/topics')
      .then(res => dispatch({ type: 'SET_TOPIC_DATA', payload: res.data }))
      .catch(err => console.log(`Error: ${err}`))
  }, []);

  useEffect(() => {
    if (state.topicId !== null) {
      axios.get(`http://localhost:8001/api/topics/photos/${state.topicId}`)
        .then(res => dispatch( {type: 'SET_PHOTO_DATA', payload: res.data}))
        .catch(err => console.log(`Error: ${err}`))

    } else {
      axios.get('http://localhost:8001/api/photos')
      .then(res => dispatch({ type: 'SET_PHOTO_DATA', payload: res.data }))
      .catch(err => console.log(`Error: ${err}`))
    }
  }, [state.topicId])

  
  useEffect(() => {
    axios.post('http://localhost:8001/api/searchResult', {data: state.searchInput})
      .then(res => {
        // res.data,length === 0 ? :
        // if res.data.length is 0, we want to change state of fetchdata
        // create a component that display cannot find result if fetchdata is false
        
        dispatch({ type: 'SET_PHOTO_DATA', payload: res.data })
      })
      .catch(err => console.log(`Error: ${err}`))
      
  }, [state.searchInput])

  return {state, dispatch};
}

export default useApplicationData