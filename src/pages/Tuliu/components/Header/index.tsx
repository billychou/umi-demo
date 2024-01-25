import React from 'react';
import styles from './index.less';

const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
                <li>
                    官方微信
                </li>
                <li>
                    广告合作
                </li>
            </ul>
        </header>
    )
};


export default Header;