// const sentence = "dodododododdodododo";

// for(const char of sentence) {

//   setTimeout (() =>{
//     process.stdout.write(char);
//   }, 1000)
// };


// function typewrite(str) {
//   let type = '';
//   for (const char of str) {
//     type += str[char];
//     setTimeout(() => process.stdout.write(type[char] += '\n'), char*300)

//   }
// };
// typewrite('dodododododdodododo');

function typewrite(str) {
  let type = '';
  for (let i = 0; i < str.length; i++) {
    type += str[i];
    setTimeout(() => process.stdout.write(type[i] += '\n'), i*500)
  }
};
typewrite('dodododododdodododo');