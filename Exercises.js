//Question 1
function myReverse(str) {
  // your code here
  let reversedStr  = "";
  for (let i = str.length - 1; i >= 0 ; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  for (let i = 0; i < str.length; i++) {
    let tmp = str[i];
    combinations.push(str[i]);
    for (let n = i+1; n < str.length; n++) {
      tmp +=  str[n];
      combinations.push(tmp);
    }
  }
  //
  return combinations;
}

//Question 3
function allCaps(str) {
  // your code here
  let capitalizeStr = ""
  capitalizeStr += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === " "){
      capitalizeStr += str[i];
      i++;
      capitalizeStr += str[i].toUpperCase();
    }
    else{
      capitalizeStr += str[i];
    }
  }
  return capitalizeStr;
}

//Question 4
function myPower(x, n) {
  // your code here
  let num = x;
  for (let i = 1; i < n; i++) {
    num *= num
  }
  return num;
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let n = 0; n < str.length; n++) {
      count = 0;
      if(i === n){
        n++;
      }
      if (str[i] === str[n]){
        count ++;
        break;
      }
    }
    if(count === 0){
      return str[i];
    }
  }
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  function allDivisorNumbers(myNum){
    divisorArr = [];
    for (let i = 0; i < myNum; i++) {
      if(myNum % i === 0){
        divisorArr.push(i);
      }
      
    }
    return divisorArr;
  }

  const numArr = allDivisorNumbers(num);
  let sum =0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  if(sum === num){
    return "this is a perfect number!"
  }
  else{
  return "this isn't a perfect number! :(";
  }
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
