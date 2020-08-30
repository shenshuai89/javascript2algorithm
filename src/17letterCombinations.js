// ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]
/* 
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/
var letterCombinations = function (digits) {
  let num2Str = [
    0,
    0,
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  let digitsArr = digits.split("").map((item) => {
    return parseInt(item);
  });
  let code = digitsArr.map((item) => {
    if (!!num2Str[item]) {
      return num2Str[item];
    }
  });
  let combine = (arr) => {
    let tmp = [];
    if (arr.length == 1) {
      tmp = arr[0].split("").map((a) => {
        return a;
      });
    } else {
      for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr[1].length; j++) {
          tmp.push(`${arr[0][i]}${arr[1][j]}`);
        }
      }
      arr.splice(0, 2, tmp);
      if (arr.length > 1) {
        combine(arr);
      } else {
        return tmp;
      }
    }
    return arr[0];
  };
  return combine(code);
};

export default letterCombinations;
