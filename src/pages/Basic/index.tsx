import { createStyles } from 'antd-style';
import React from 'react';

type BasicDemoProps = {
  name?: string;
  age?: number;
};

type BasicDemoPropsIndex = keyof BasicDemoProps;
// console.log(keyof BasicDemoProps);
let index: BasicDemoPropsIndex = ['name', 'age'];
console.log(typeof index);

const useStyles = createStyles(({ token, css }) => ({
  container: {
    backgroundColor: token.blue3,
    width: '100%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    color: token.yellow,
  },
}));

async function getFavoriteNumber(): Promise<number> {
  return 26;
}

const getVowels = (str: string): number => {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
};

const BasicDemo: React.FC = () => {
  const { styles, cx, theme } = useStyles();
  const hello: string = 'hello';
  // const name: string = "Richard Feyimen";
  const firstName: symbol = Symbol('Richard');
  const secondName: symbol = Symbol('Feyimen');
  const vowelLength: number = getVowels(hello);
  let aBigint: bigint = 100n;
  // console.log(aBigint);
  // console.log(typeof null);
  // console.log(typeof undefined);
  // console.log(null === undefined);
  // // console.log(null == undefined);
  // console.log(Number.isNaN(null));
  // console.log(Number.isNaN(undefined));
  // console.log(Number.isNaN(1 + undefined));

  return (
    <div className={cx('container', styles.container)}>
      <div>
        {hello.toUpperCase() +
          ' ' +
          firstName.description +
          ' ' +
          secondName.description}
      </div>
      <div className={cx('text', styles.text)}>
        {/* {aBigint} */}
        welcome: {vowelLength}
      </div>
    </div>
  );
};

export default BasicDemo;
