import React from 'react';
import { Table, type TableColumnsType } from 'antd';
import Header from './components/Header';

const columns: TableColumnsType = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    }
];

const TuliuIndex = () => {
    return (
        <Header></Header>
    )
};


export default TuliuIndex;