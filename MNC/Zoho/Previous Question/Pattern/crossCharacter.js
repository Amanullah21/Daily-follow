//https://practice.geeksforgeeks.org/problems/cross-character2630/1

const croseCharacteer = (str) => {
  for (let i = 0; i < str.length; i++) {
    let ans = "";
    for (let j = 0; j < str.length; j++) {
      if (i == j || i + j == str.length - 1) {
        ans += str[j];
      } else {
        ans += " ";
      }
    }
    console.log(ans);
  }
};
croseCharacteer("abc");
