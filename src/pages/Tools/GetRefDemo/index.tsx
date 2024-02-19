import { GetRef, Input } from 'antd';
import React from 'react';

type InputRef = GetRef<typeof Input>;

const GetRefTools: React.FC = () => {
  const searchInput = React.useRef<InputRef>(null);
  return (
    <div>
      <Input ref={searchInput} placeholder="Search" />
      <button
        type="button"
        onClick={() => {
          if (searchInput.current) {
            return searchInput.current?.focus();
          }
        }}
      >
        focus
      </button>
    </div>
  );
};

export default GetRefTools;
