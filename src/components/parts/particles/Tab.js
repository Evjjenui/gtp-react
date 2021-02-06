import React from "react";

class Tab extends React.Component {
  constructor(props) {
    super(props);
  };

  onClick = () => {
    const { tabName, onClick } = this.props
    onClick(tabName)
  }

  render() {
    const { 
      props: {
        tabName,
        activeTab
      },
      onClick
    } = this;

    let name = 'TabItem';

    if (activeTab === tabName) {
      name += ' TabItem-active';
    };

    return (
      <li
        className={name}
        onClick={onClick}>
        {tabName}
      </li>
    );
  };
}
export default Tab;
