/* eslint-disable react/button-has-type */
import { Button, Card, Space } from 'antd';
import React, { useRef, useState } from 'react';

const useMyHook = (inputCount) => {
  const [count, setCount] = useState(inputCount);
  return { count };
};

const ExampleComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(count);
  ref.current = count;
  const handleClick = () => {
    setTimeout(() => {
      console.log(count);
      console.log(ref.current);
      setCount(ref.current + 1);
    }, 3000);
  };

  // useEffect(() => {
  //     setInterval(()=>{
  //         setCount(prev => prev+11);
  //     }, 5000);
  // }, []);

  return (
    <div>
      <Card>
        <p>{count}</p>
        <Space>
          <Button
            onClick={() => setCount(count + 1)}
            type="primary"
            size="small"
          >
            setCount
          </Button>
          <Button onClick={handleClick} type="primary" size="small">
            DelayCount
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default ExampleComponent;
