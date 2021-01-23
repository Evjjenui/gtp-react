import React from "react";
import { Remarkable } from "remarkable";
  
class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.changeHandler = this.changeHandler.bind(this);
    this.state = { text: '' };
  }

  changeHandler(e) {
    this.setState({ text: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.text) };
  }

  render () {
    return (
      <div>
        <textarea
          onChange = { this.changeHandler }
          defaultValue = { this.state.text }>
        </textarea>
        <div dangerouslySetInnerHTML={ this.getRawMarkup() } />
      </div>
    )
  }
}

export default Markdown;
