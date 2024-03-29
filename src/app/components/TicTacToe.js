import React from 'react';
import TicItem from './parts/particles/TicItem'
import krestiki from './parts/krestiki/krestiki'

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.fieldStateCheck = this.fieldStateCheck.bind(this);
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
      return alert(`"X" WIN !!!`);
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
      return alert(`"O" WIN !!!`);
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
