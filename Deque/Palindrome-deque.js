import Deque from './Deque';

const palindrome = (str) => {
  // create a palindrome checker using deque
  if (str.length == 0 || !str || str == null) {
    return false;
  }

  const backwardStr = new Deque;

  for (let letter in str) {
    backwardStr.addFront(str[letter]);
  }

  return backwardStr.items.join('') == str 
}