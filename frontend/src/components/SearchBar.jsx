import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props) => {
  const {dispatch, state} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'SET_SEARCH_INPUT' , payload: ''})
  }
  // set var string value, on submit, payload to set_search_input
  return (
    <div>
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
        <form onSubmit={(e) => { handleSubmit(e)}}>
          <input value={state.searchInput} onChange={(e) => { dispatch({type: 'SET_SEARCH_INPUT' , payload: e.target.value}) }} placeholder='Search'></input>
          <button type="submit" >Clear</button>
        </form>
    </div>
  )
}

export default SearchBar;