import React from 'react';
import { Table, type TableColumnsType } from 'antd';
import { wrapInArray } from '@/utils/common';

const columns: TableColumnsType = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    }
];

/**
 * 泛型为类型提供变量 
 */
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{name: string}>;

interface Backpack<T> {
    add: (obj: T) => void;
    get: () => T;
}

declare const backpack: Backpack<string>;
const obj = backpack.get();
// backpack.add(14);
backpack.add("hello");

type Fish = {swim: ()=>void};
type Bird = {fly: ()=>void};

function move(animal: Fish|Bird): void {
    if ("swim" in animal) {
        animal.swim();
    } else {
        animal.fly();
    }
}

let myString = "welcome";
let wrapArrayList = wrapInArray(myString);
console.log(wrapArrayList);

const TuliuIndex = () => {
    return (
        <div>
            welcome tuliu
        </div>
    )
};


export default TuliuIndex;