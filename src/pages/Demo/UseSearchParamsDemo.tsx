import { useSearchParams } from '@umijs/max';
import React, { useMemo } from 'react';

const UseSearchParamsDemo: React.FC = () => {
  const [search, setSearchParams] = useSearchParams();
  const getSearch = useMemo(() => {
    let param = {};
    for (const [k, v] of search) {
      param[k] = v;
    }
    return param;
  }, []);
  console.log(getSearch);
  return <div style={{ backgroundColor: 'green' }}>{getSearch.a}</div>;
};

export default UseSearchParamsDemo;
