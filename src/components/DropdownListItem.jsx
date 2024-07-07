import React from "react";
import '../styles/DropdownListItem.scss';
import { useContext } from "react";
import { applicationContext } from "hooks/applicationContext";
import TopicListItem from "./TopicListItem";

const DropdownListItems = () => {

  const {dispatch, state} = useContext(applicationContext);
  const {topicData} = state;
  const allTopics = topicData.map((topic) => {
    return <TopicListItem key={topic.id} id={topic.id} label={topic.title} dispatch={dispatch} state={state} />
  })
  return (
    <ul className="dropdown-menu">
      {allTopics}
    </ul>
  )
}

export default DropdownListItems;