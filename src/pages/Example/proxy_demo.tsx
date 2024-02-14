import React from 'react';

/**
 *  proxy  instance
 *
 */
let person = {
  name: '张三',
};

const handler = {
  get: (target: any, property: any) => {
    if (property in target) {
      return target[property];
    } else {
      // throw new ReferenceError("Propery: " + propery + "does not exist");
      return '周林';
    }
  },
};
// proxy demo
let personProxy = new Proxy(person, handler);

// get方法可以继承
let proto = new Proxy(
  {},
  {
    get: (target, propertyKey, receiver) => {
      console.log('Proxy GET ' + propertyKey);
      return target[propertyKey];
    },
  },
);
let obj = Object.create(proto);

/**
 * react component
 * @returns
 */
const ProxyDemo: React.FC = () => {
  console.log(personProxy.name);
  return (
    <>
      <div>welcome, {personProxy.age}</div>
      <div>obj: {obj.name}</div>
    </>
  );
};

export default ProxyDemo;
