import React from 'react';
import { createStyles } from 'antd-style';
import styles from './index.less';
import { Space, Flex } from 'antd';


const MyButton: React.FC = () => {
    return (
        <div>
            <button>hello</button>
        </div>
    )
}

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const MyApp: React.FC = () => {
    return (
        <Flex vertical>
            <p>this is my app</p>
            <img
                className={styles.avatar}
                src={user.imageUrl}
                alt={'photo of' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }} />
            <MyButton />
        </Flex>
    );
}

export default MyApp;