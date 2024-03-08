import React, { useEffect, useRef } from 'react';

type G2LineDemoProps = {
  data: any;
};

const G2LineDemo: React.FC<G2LineDemoProps> = ({ data }) => {
  const chart = useRef(null);
  useEffect(() => {
    console.log('useEffect');
  }, []);
  return <>welcome</>;
};
