import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import React, { useState, useEffect, useRef } from 'react';
import { PageContainer, ProCard, ProColumns, ProList, ProTable } from '@ant-design/pro-components';
import { useLocation, useMatch, useModel, useParams, useSearchParams } from '@umijs/max';
import styles from './index.less';
import { Card, message } from 'antd';

import { SearchOutlined } from '@ant-design/icons';
import type { GetRef, TableColumnType } from 'antd';
import { Button, Input, Space } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';

import { getVenusLocalUserList } from '@/services/venus/venus';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

export type VenusUserListItem = {
  id: number;
  userName: string;
  nickName: string;
  createTime: number;
  updateTime: number;
  createUser: string;
  updateUser: string;
};

type InputRef = GetRef<typeof Input>;
type DataIndex = keyof VenusUserListItem;

/**
 * Generate the function comment for the given function body.
 *
 * @return {void} No return value.
 */
const UserPage: React.FC = () => {
  // 获取初始化状态值
  const [dataSource, setDataSource] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            查询
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            重置
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            关闭
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  // columns
  const columns: ProColumns<VenusUserListItem>[] = [
    {
      title: "姓名",
      key: "userName",
      dataIndex: "userName",
      ...getColumnSearchProps("userName"),
    },
    {
      title: "昵称",
      key: "nickName",
      dataIndex: "nickName",
      ...getColumnSearchProps("nickName"),
    }
  ];
  return (
    <PageContainer ghost>
      <ProTable
        search={false}
        columns={columns}
        request={async (params, sorter, filter) => {
          console.log(params, sorter, filter);
          const res = await getVenusLocalUserList({});
          setDataSource(res.data);
          return {
            success: res.success,
            data: res.data,
          }
        }}
      />
    </PageContainer>
  );
};

export default UserPage;
