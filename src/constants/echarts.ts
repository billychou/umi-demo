import { getDesignToken } from 'adder-tools';

const { token: globaltoken } = getDesignToken();

// console.log(globaltoken.gray7)
/** 折线图色值 */
export const COLORS = [
  globaltoken['blue6'],
  globaltoken['red6'],
  globaltoken['magenta6'],
  globaltoken['orange6'],
  globaltoken['yellow6'],
  globaltoken['purple6'],
  globaltoken['cyan6'],
  globaltoken['green6'],
  globaltoken['gray7'],
  globaltoken['blue4'],
  globaltoken['red4'],
  globaltoken['magenta4'],
  globaltoken['orange4'],
  globaltoken['yellow4'],
  globaltoken['purple4'],
  globaltoken['cyan4'],
  globaltoken['green4'],
  globaltoken['gray5'],
];
// export const COLORS = [
//   '#8EDEB3',
//   '#56A5D4',
//   '#697CE3',
//   '#A868E8',
//   '#9595F9',
//   '#DBB1F9',
//   '#F7A8D5',
//   '#FDCAC9',
//   '#FBA5A4',
//   '#EEDE7E',
// ]

export const ANOMALY_COLORS = ['#ff0000', '#ae4630', '#e37139'];
