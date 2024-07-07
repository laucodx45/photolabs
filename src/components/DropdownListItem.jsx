import React from "react";
import '../styles/DropdownListItem.scss';
import { useContext } from "react";
import { applicationContext } from "hooks/applicationContext";

const DropdownListItems = () => {

  const {dispatch, state} = useContext(applicationContext);
  return (
    <ul className="dropdown-menu">
      <li className="dropdown-item">Item 1</li>
      <li className="dropdown-item">Item 2</li>
      <li className="dropdown-item">Item 3</li>
    </ul>
  )
}

export default DropdownListItems;