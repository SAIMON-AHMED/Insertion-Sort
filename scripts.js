// Time -> O(n^2) | Space -> O(1)
function insertionSort(array) {

  for (let i = 1; i < array.length; i++) {
    let consideredElement = array[i];
    for (let j = i; j >= 1; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}

