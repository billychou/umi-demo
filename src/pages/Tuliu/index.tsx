import { wrapInArray } from '@/utils/common';
import { type TableColumnsType } from 'antd';
import React from 'react';

const columns: TableColumnsType = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
];

/**
 * 泛型为类型提供变量
 */
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<T> {
  add: (obj: T) => void;
  get: () => T;
}

// declare const backpack: Backpack<string>;
// const obj = backpack.get();
// // backpack.add(14);
// backpack.add("hello");

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird): void {
  if ('swim' in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}

const demoFunc = () => {
  console.log('demoFunc');
};
demoFunc.description = 'this is a function demo';

let myString = 'welcome';
let wrapArrayList = wrapInArray(myString);
console.log(wrapArrayList);

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

function firstElementT<T>(arr: T[]): T | undefined {
  return arr[0];
}

function myMap<Input, Output>(
  arr: Input[],
  func: (args: Input) => Output,
): Output[] {
  return arr.map(func);
}

function longest<T extends { length: number }>(a: T, b: T) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

longest([1, 2], [1, 2, 3]);
// longest(10, 100);

type AType = {
  a?: string;
  b?: string;
};

type BType = {
  c?: string;
  d?: string;
};

type CType = (AType | BType)[];

interface TuliuIndexProps {
  name?: string;
  age?: number;
  getName?: (name: string) => string;
}

const TuliuIndex: React.FC<TuliuIndexProps> = ({ name, age }) => {
  console.log(name);
  console.log(age);
  return <div>welcome tuliu</div>;
};

export default TuliuIndex;
