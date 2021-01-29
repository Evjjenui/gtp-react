import React from 'react';
import TicItem from './particles/TicItem'

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
    this.state = {
      cross: 'x'
    }
  };

  updateItem(value) {
    if (value) {
      console.log(`square not empty '${value}'`);
      return true;
    };
    
    console.log(`square is empty`);
    return false;
  };

  render () {
    const items = [];
    for (var i = 0; i < 9; i++) {
      items.push(<TicItem key={i} value='' clickHandler={this.updateItem}/>)
    }
    return (

      <div>
        <div className='ticGrid'>
          {items}
        </div>
      </div>
    )
  }
}

export default TicTacToe;
