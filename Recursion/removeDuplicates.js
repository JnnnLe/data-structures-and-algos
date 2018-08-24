const removeDuplicates = (str, i = 0, noDuplicatesArr = [], duplicatesObj = {}) => {
  let split = str.toLowerCase().split('');

  if (str.length == 0) return noDuplicatesArr.join('');
  
  while (i < split.length) {
    if ((split.indexOf(split[i])) == (split.lastIndexOf(split[i]))) {
      noDuplicatesArr.push(split[i]);
    } else {
      if (!duplicatesObj[split[i]]) {
        console.log('case hit, should be e then n', split[i]);
        duplicatesObj[split[i]] = 1;
        noDuplicatesArr.push(split[i]);
      }
    }
    i++;
    return removeDuplicates(str, i, noDuplicatesArr, duplicatesObj);
  };

  return noDuplicatesArr.join('');
};

removeDuplicates('JEnNifer');