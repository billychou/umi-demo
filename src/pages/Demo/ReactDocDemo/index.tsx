import { Flex } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';
import Game from './components/TicTacToe';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const useStyle = createStyles(({ token, css }) => ({
  avatar: {
    borderRadius: '50%',
    width: user.imageSize,
    height: user.imageSize,
  },
}));

const MyApp: React.FC = () => {
  const { styles } = useStyle();
  return (
    <Flex vertical>
      <img
        className={styles.avatar}
        src={user.imageUrl}
        alt={'photo of' + user.name}
      />
      <Game />
    </Flex>
  );
};

export default MyApp;
