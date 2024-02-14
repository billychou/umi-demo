import React, { useEffect } from 'react';

let promise = new Promise((resolve, reject) => {
  let i = Math.floor(Math.random() * 10);
  if (i > 5) {
    resolve(i);
  } else {
    reject(i);
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const PromiseDemo: React.FC = () => {
  useEffect(() => {}, []);
  return <div>welcome</div>;
};

export default PromiseDemo;
