/**
 * @param {any[]} arr
 * @returns {void}
 */
function shuffle(arr) {
  // inplace changing
  for (let i = arr.length - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
}

