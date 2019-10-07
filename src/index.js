module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 !== 0 || bracketsConfig[0][1] !== str[str.length - 1]) return false;
  console.log(bracketsConfig[0][0]);

  let leftBrackets = 0;
  let rightBrackets = 0;

  for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (str[i] === bracketsConfig[j][0]) {
              leftBrackets++;
          }
          if (str[i] === bracketsConfig[j][1]) {
              rightBrackets++;
          }
      }
  }

  return leftBrackets === rightBrackets;
}
