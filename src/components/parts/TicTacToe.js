import React from 'react';
import TicItem from './particles/TicItem'
import krestiki from './krestiki/krestiki'

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.state = {
      items: ['', '', '', '', '', '', '', '', ''],
      squareSign: 'x'
    }
  };

  resetGame() {
    this.setState({
      items: ['', '', '', '', '', '', '', '', ''],
      squareSign: 'x'
    })
  }

  updateItem(index) {
    this.setState(krestiki(this.state, index));
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
        <button
          onClick={this.resetGame}>
          RESET
        </button>
      </div>
    )
  }
}

export default TicTacToe;
