import React from 'react';
import TicItem from './particles/TicItem'

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
    this.state = {
      items: ['', '', '', '', '', '', '', '', ''],
      squareSign: 'x'
    }
  };

  updateItem(index) {
    let itemsCopy = [...this.state.items];
    let selectedItem = itemsCopy[index];

    if (!selectedItem) {
      selectedItem = this.state.squareSign;
      itemsCopy[index] = selectedItem;

      if (this.state.squareSign === 'x') {

        return this.setState({
          items: itemsCopy,
          squareSign: 'o'
        });
      }

      return this.setState({
        items: itemsCopy,
        squareSign: 'x'
      });

    } else {
      return;
    }
  };

  render () {
    const items = this.state.items;
    
    return (

      <div>
        <div className='ticGrid'>
          {this.state.items.map((item, index) => (
            <TicItem
              key={index}
              value={item}
              clickHandler={ () => this.updateItem(index)}/>
          ))}
        </div>
      </div>
    )
  }
}

export default TicTacToe;
