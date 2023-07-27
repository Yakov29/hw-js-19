const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];

function getFirstAndLastLetters(arr) {
  return arr.map(str => str.charAt(0) + str.charAt(str.length - 1));
}

const newArray = getFirstAndLastLetters(array2);
console.log(newArray); 
