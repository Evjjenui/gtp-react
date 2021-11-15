import React from "react";

function Tab(props) {
  const { 
    tabName,
    activeTab,
  } = props;

  let name = 'TabItem';

  if (activeTab === tabName) {
    name += ' TabItem-active';
  };

  function onClicked() {
    const { tabName, onClick } = props
    onClick(tabName)
  }

  return (
    <li
      className={name}
      onClick={onClicked}>
      {tabName}
    </li>
  );
}
export default Tab;
