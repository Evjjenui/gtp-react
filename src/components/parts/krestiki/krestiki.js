export default function krestiki(stateObj, index) {
  let itemsCopy = [...stateObj.items];
  let selectedItem = itemsCopy[index];
  console.log('HERE');
  console.log(itemsCopy, selectedItem, stateObj.squareSign);
  
  if (!selectedItem) {
    console.log('reinit array');
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
