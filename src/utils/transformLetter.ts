/** 获取大写的英文字母序号
 * @params { val } number  从 1 开始的序号
 * @return 大写的英文字母，如：A
 * */
const transformLetter = (val?: number) => {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const arr = [];
  let num = val ?? 1;

  while (num > 0) {
    num--;
    const rem = num % 26;
    arr.push(str[rem]);
    num = Math.floor(num / 26);
  }

  return arr.reverse().join('');
};

export default transformLetter;
