import React from "react";

class Tab extends React.Component {
  constructor(props) {
    super(props);
  };

  onClicked = () => {
    const { tabName, onClick } = this.props
    onClick(tabName)
  }

  render() {
    const { 
      props: {
        tabName,
        activeTab
      },
      onClicked
    } = this;

    let name = 'TabItem';

    if (activeTab === tabName) {
      name += ' TabItem-active';
    };

    return (
      <li
        className={name}
        onClick={onClicked}>
        {tabName}
      </li>
    );
  };
}
export default Tab;
