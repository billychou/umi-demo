import { Button, Flex, Space } from 'antd';
import React, { useRef, useState } from 'react';

const RefDemo = () => {
  const countRef = useRef<number>(0); // 计数 REF
  const intervalRef = useRef(null); // 定时器 REF
  const timeoutRef = useRef();
  const inputRef = useRef();
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [now, setNow] = useState<Date | null>(null);
  const [send, setSend] = useState(false);
  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const onHandleStart = () => {
    let d: Date = new Date();
    setStartTime(d);
    setNow(d);
    intervalRef.current = setInterval(() => {
      Ref.current += 1;
    }, 1000);
  };

  const onHandleStop = () => {
    clearInterval(intervalRef.current);
  };

  const onHandleClear = () => {
    console.log('handler clear');
  };

  const onHandleClick = () => {
    ref.current = ref.current + 1;
    alert('Click ' + ref.current + '次');
  };

  const onHandleInputClick = () => {
    console.log('onHandleInputClick');
    inputRef.current.focus();
  };

  const onUndoClick = () => {
    console.log('onUndoClick');
    clearTimeout(timeoutRef.current);
    setSend(false);
  };

  const onSendClick = () => {
    console.log('onSendClick');
    setSend(true);
    timeoutRef.current = setTimeout(() => {
      console.log('onSendClick send success');
      setSend(false);
    }, 10000);
  };

  return (
    <Flex vertical gap="small">
      {/* <Button onClick={onHandleClick}>点击</Button> */}
      <Space.Compact>
        <input type="text" ref={inputRef} />
        <button onClick={onHandleInputClick} type="button">
          开始输入
        </button>
      </Space.Compact>
      <Space>
        <Button type="primary" onClick={onSendClick} size="small">
          {send ? '发送中' : '发送'}
        </Button>
        {send && (
          <Button type="primary" onClick={onUndoClick} size="small">
            取消发送
          </Button>
        )}
      </Space>
      <Space align="center">
        <p>{countRef.current}</p>
        <Button type="primary" onClick={onHandleStart} size="small">
          开始
        </Button>
      </Space>
      {/* <p>时间过去了:{secondsPassed}</p>
      <Card>
        <Button onClick={onHandleStart} type="primary">
          开始
        </Button>
        <Button onClick={onHandleStop} type="primary">
          停止
        </Button>
        <Button onClick={onHandleClear} type="primary">
          清零
        </Button>
      </Card> */}
    </Flex>
  );
};

export default RefDemo;
