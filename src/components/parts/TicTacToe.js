import React from 'react';
import TicItem from './particles/TicItem'
import krestiki from './krestiki/krestiki'

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.fieldStateCheck = this.fieldStateCheck.bind(this);
    this.state = {
      items: ['', '', '', '', '', '', '', '', ''],
      squareSign: 'x',
      gameWinner: ''
    }
  };
  
  resetGame() {
    this.setState({
      items: ['', '', '', '', '', '', '', '', ''],
      squareSign: 'x',
      gameWinner: ''
    })
  }

  fieldStateCheck() {
    
    if (
      this.state.items[0] === 'x' && this.state.items[1] === 'x' && this.state.items[2] === 'x' ||
      this.state.items[3] === 'x' && this.state.items[4] === 'x' && this.state.items[5] === 'x' ||
      this.state.items[6] === 'x' && this.state.items[7] === 'x' && this.state.items[8] === 'x' ||
  
      this.state.items[0] === 'x' && this.state.items[3] === 'x' && this.state.items[6] === 'x' ||
      this.state.items[1] === 'x' && this.state.items[4] === 'x' && this.state.items[7] === 'x' ||
      this.state.items[2] === 'x' && this.state.items[5] === 'x' && this.state.items[8] === 'x' ||
  
      this.state.items[0] === 'x' && this.state.items[4] === 'x' && this.state.items[8] === 'x' ||
      this.state.items[2] === 'x' && this.state.items[4] === 'x' && this.state.items[6] === 'x'
     ) {
      this.setState({gameWinner: `"X" WIN !!!`});
     } else if (
      this.state.items[0] === 'o' && this.state.items[1] === 'o' && this.state.items[2] === 'o' ||
      this.state.items[3] === 'o' && this.state.items[4] === 'o' && this.state.items[5] === 'o' ||
      this.state.items[6] === 'o' && this.state.items[7] === 'o' && this.state.items[8] === 'o' ||
  
      this.state.items[0] === 'o' && this.state.items[3] === 'o' && this.state.items[6] === 'o' ||
      this.state.items[1] === 'o' && this.state.items[4] === 'o' && this.state.items[7] === 'o' ||
      this.state.items[2] === 'o' && this.state.items[5] === 'o' && this.state.items[8] === 'o' ||
  
      this.state.items[0] === 'o' && this.state.items[4] === 'o' && this.state.items[8] === 'o' ||
      this.state.items[2] === 'o' && this.state.items[4] === 'o' && this.state.items[6] === 'o'
     ) {
      this.setState({gameWinner: `"O" WIN !!!`});
     } else {
      return;
    }
  }

  updateItem(nextSign, index) {
    this.setState(krestiki(this.state, index, nextSign), this.fieldStateCheck);
  };

  render () {
    const items = this.state.items;
    let nextSign = 'o';
    
    return (

      <>
        <div className='ticGrid'>
          {this.state.items.map((item, index) => (
            <TicItem
              key={index}
              value={item}
              clickHandler={ () => this.updateItem(nextSign, index)}/>
          ))}
        </div>
        <span>Result: { this.state.gameWinner } </span>
        <div className="form-item">
          <button
            onClick={this.resetGame}>
            RESET
          </button>
        </div>
      </>
    )
  }
}

export default TicTacToe;
