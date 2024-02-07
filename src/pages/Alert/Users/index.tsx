import React, { useState, useRef } from 'react';
import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Input, Space} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import type { GetRef, TableColumnType } from 'antd';
import { getVenusLocalUserList } from '@/services/venus/venus';
import { createStyles } from 'antd-style';

interface RecordType {
  key: React.Key;
  userName: string;
  nickName: string;
  createTime: number;
  updateTime: number;
  createUser: string;
  updateUser: string;
}

type VenusUserListItem = {
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
  // filter text
  const [searchText, setSearchText] = useState('');
  // filter column
  const [searchedColumn, setSearchedColumn] = useState('');
  // searchInput ref 
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

  /**
   * export interface FilterDropdownProps {
      prefixCls: string;
      setSelectedKeys: (selectedKeys: React.Key[]) => void;
      selectedKeys: React.Key[];
      confirm: (param?: FilterConfirmProps) => void;
      clearFilters?: () => void;
      filters?: ColumnFilterItem[];
      visible: boolean;
    }
  */
  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<VenusUserListItem> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => {
      // console.log(setSelectedKeys, selectedKeys, confirm, clearFilters, close);
      console.log(selectedKeys);
      console.log(confirm);
      console.log(clearFilters);
      console.log(close);
      return (<div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
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
        </Space>
      </div>
    )},
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) => (record[dataIndex].toString().toLowerCase().includes((value as string).toLowerCase())),
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
  const columns: TableColumnType<VenusUserListItem>[] = [
    {
      title: "姓名",
      key: "userName",
      dataIndex: "userName",
      width: "10%",
      ...getColumnSearchProps("userName"),
    },
    {
      title: "昵称",
      key: "nickName",
      dataIndex: "nickName",
      width: "80%",
      ...getColumnSearchProps("nickName"),
    }
  ];
  return (
    <PageContainer ghost>
      <ProTable
        search={false}
        columns={columns}
        params={{a:1}}
        request={async (params, sorter, filter) => {
          console.log(params);
          console.log(sorter);
          console.log(filter);
          const res = await getVenusLocalUserList({params});
          const myData = res.data.map(i => {
            i.key = i.id;
            return i;
          });
          return {
            success: res.success,
            data: myData,
          };
        }}
      />
    </PageContainer>
  );
};

export default UserPage;
