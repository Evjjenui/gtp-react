import React from "react";
import Tab from "../particles/Tab";

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.title,
    }
  };

  onClickItem = (tab) => {
    this.setState({activeTab: tab});
  };

  render() {
    const {
      props: {children, },
      state: {
        activeTab,
      }, 
      onClickItem
    } = this;

    return (
      <div>
        <ul>
          {children.map((child) => {
            const { title } = child.props;

            return (
              <Tab
                key={title}
                tabName={title}
                activeTab={activeTab}
                onClick={onClickItem}
              />
              )
            })}
            <div className="tab-content">
              {children.map((child) => {
                if (child.props.title !== activeTab) return undefined;
                return child.props.children;
              })}
            </div>
        </ul>
      </div>
    );
  };
}

export default Tabs;
