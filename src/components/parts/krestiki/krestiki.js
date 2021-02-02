export default function krestiki(stateObj, index) {
  let itemsCopy = [...stateObj.items];
  let selectedItem = itemsCopy[index];

  if (
    stateObj.items[0] === 'x' && stateObj.items[1] === 'x' && stateObj.items[2] === 'x' ||
    stateObj.items[3] === 'x' && stateObj.items[4] === 'x' && stateObj.items[5] === 'x' ||
    stateObj.items[6] === 'x' && stateObj.items[7] === 'x' && stateObj.items[8] === 'x' ||

    stateObj.items[0] === 'x' && stateObj.items[3] === 'x' && stateObj.items[6] === 'x' ||
    stateObj.items[1] === 'x' && stateObj.items[4] === 'x' && stateObj.items[7] === 'x' ||
    stateObj.items[2] === 'x' && stateObj.items[5] === 'x' && stateObj.items[8] === 'x' ||

    stateObj.items[0] === 'x' && stateObj.items[4] === 'x' && stateObj.items[8] === 'x' ||
    stateObj.items[2] === 'x' && stateObj.items[4] === 'x' && stateObj.items[6] === 'x' ||

    stateObj.items[0] === 'o' && stateObj.items[1] === 'o' && stateObj.items[2] === 'o' ||
    stateObj.items[3] === 'o' && stateObj.items[4] === 'o' && stateObj.items[5] === 'o' ||
    stateObj.items[6] === 'o' && stateObj.items[7] === 'o' && stateObj.items[8] === 'o' ||

    stateObj.items[0] === 'o' && stateObj.items[3] === 'o' && stateObj.items[6] === 'o' ||
    stateObj.items[1] === 'o' && stateObj.items[4] === 'o' && stateObj.items[7] === 'o' ||
    stateObj.items[2] === 'o' && stateObj.items[5] === 'o' && stateObj.items[8] === 'o' ||

    stateObj.items[0] === 'o' && stateObj.items[4] === 'o' && stateObj.items[8] === 'o' ||
    stateObj.items[2] === 'o' && stateObj.items[4] === 'o' && stateObj.items[6] === 'o'
  ) {
    return alert(`"${stateObj.squareSign}" WIN !!!`);
  }

  if (!selectedItem) {
    selectedItem = stateObj.squareSign;
    itemsCopy[index] = selectedItem;
  
    if (stateObj.squareSign === 'x') {
  
      return ({
        items: itemsCopy,
        squareSign: 'o'
      });
    }
  
    return ({
      items: itemsCopy,
      squareSign: 'x'
    });
  
  } else {
    return;
  }
}
