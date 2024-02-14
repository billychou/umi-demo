import { useState } from 'react';

const o = { a: 10, b: 20 };
Object.defineProperty(o, 'c', { enumerable: false, value: 30 });
for (let p in o) {
  console.log(p);
}

export default function Form({ status = 'empty' }) {
  const [status, setStatus] = useState();
  return (
    <>
      <div>welcome</div>
    </>
  );
}
