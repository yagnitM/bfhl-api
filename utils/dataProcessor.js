const processInputData = (data) => {
  const evenNumbers = [];
  const oddNumbers = [];
  const alphabets = [];
  const specialCharacters = [];
  let sum = 0;

  data.forEach(item => {
    const str = String(item);
    
    if (!isNaN(str) && str.trim() !== '') {
      const num = parseInt(str);
      sum += num;
      
      if (num % 2 === 0) {
        evenNumbers.push(str);
      } else {
        oddNumbers.push(str);
      }
    }
    else if (/^[a-zA-Z]+$/.test(str)) {
      alphabets.push(str.toUpperCase());
    }
    else {
      for (let char of str) {
        if (!/[a-zA-Z0-9]/.test(char)) {
          if (!specialCharacters.includes(char)) {
            specialCharacters.push(char);
          }
        } else if (/^[a-zA-Z]$/.test(char)) {
          alphabets.push(char.toUpperCase());
        } else if (/^[0-9]$/.test(char)) {
          const num = parseInt(char);
          sum += num;
          if (num % 2 === 0) {
            evenNumbers.push(char);
          } else {
            oddNumbers.push(char);
          }
        }
      }
    }
  });

  const concatString = createConcatString(data);

  return {
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets,
    special_characters: specialCharacters,
    sum: sum.toString(),
    concat_string: concatString
  };
};

const createConcatString = (data) => {
  let allAlphabets = [];
  
  data.forEach(item => {
    const str = String(item);
    for (let char of str) {
      if (/^[a-zA-Z]$/.test(char)) {
        allAlphabets.push(char.toLowerCase());
      }
    }
  });

  allAlphabets.reverse();
  let result = '';
  for (let i = 0; i < allAlphabets.length; i++) {
    if (i % 2 === 0) {
      result += allAlphabets[i].toUpperCase();
    } else {
      result += allAlphabets[i].toLowerCase();
    }
  }
  return result;
};

module.exports = {
  processInputData
};
