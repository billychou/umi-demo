import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useLocation, useMatch, useModel, useParams, useSearchParams } from '@umijs/max';
import styles from './index.less';
import { Button, Card, message } from 'antd';
import sytles from './index.less';
import React, {useState} from 'react';

const onClick = () => {
  message.info("已提交");
};

const MyText = () =>  {
  return <div className={styles.avatar}>welcome</div>
}


const MyButton = () => {
  return (
    <Button 
      type="primary" 
      onClick={onClick}
    > 提交
    </Button>
  );
}

const user = {
  name: '周林',
  imageUrl: 'http://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
};

const products = [
  {
    title: 'Cabbage', id: 1
  }, 
  {
    title: 'Garlic', id: 2
  },
  {
    title: 'Apple', id: 3
  } 
];

const listItems = products.map(product => 
  <li>
    {product.title}
  </li>
);

const DemoPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>欢迎{user.name}</h1>
      <Button onClick={handleClick} type="primary">提交1</Button>
      <div>提交了{count}次</div>
    </div>
  );
};

export default DemoPage;
