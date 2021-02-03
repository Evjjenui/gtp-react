export default function krestiki(stateObj, index) {
  let itemsCopy = [...stateObj.items];
  let selectedItem = itemsCopy[index];
  
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
