import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.startCount };
  }

  tick() {
    this.setState(state =>({
      text: state.text + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval)
  };

  render() {
    return (
      <div>
        Секундомер: {this.state.text} .
      </div>
    )
  }
};

export default Timer;
