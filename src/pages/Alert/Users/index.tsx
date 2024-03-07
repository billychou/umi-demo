import { getVenusLocalUserList } from '@/services/venus/venus';
import { SearchOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import type { GetRef } from 'antd';
import { Button, Input, Space } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

type VenusUserListItem = {
  id: number;
  key: React.Key;
  age: number;
  userName: string;
  nickName: string;
  createTime: number;
  updateTime: number;
  createUser: string;
  updateUser: string;
};

type InputRef = GetRef<typeof Input>;
console.log(typeof Input);
type DataIndex = keyof VenusUserListItem;

/**
 * Generate the function comment for the given function body.
 *
 * @return {void} No return value.
 */
const UserPage: React.FC = () => {
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

  const getColumnSearchProps = (
    dataIndex: DataIndex,
  ): ProColumns<VenusUserListItem> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => {
      return (
        <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() =>
                handleSearch(selectedKeys as string[], confirm, dataIndex)
              }
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
      );
    },
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      // console.log(`onFilterDropdownOpenChange:visible=${visible}`);
      // console.log(searchInput.current);
      if (visible) {
        setTimeout(
          () => searchInput.current && searchInput.current.select(),
          100,
        );
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
      title: '姓名',
      key: 'userName',
      dataIndex: 'userName',
      ...getColumnSearchProps('userName'),
    },
    {
      title: '昵称',
      key: 'nickName',
      dataIndex: 'nickName',
      ...getColumnSearchProps('nickName'),
    },
    {
      title: '年龄',
      key: 'age',
      dataIndex: 'age',
      sorter: (a, b, sortOrder) => {
        if (sortOrder === 'ascend') {
          console.log(`sortOrder=${sortOrder},a.age=${a.age},b.age=${b.age}`);
          if (typeof a.age === 'string') {
            return 1;
          } else if (typeof b.age === 'string') {
            return -1;
          } else {
            return a.age - b.age;
          }
        }

        if (sortOrder === 'descend') {
          console.log(`sortOrder=${sortOrder},a.age=${a.age},b.age=${b.age}`);
          if (typeof a.age === 'string') {
            return -1;
          } else if (typeof b.age === 'string') {
            return 1;
          } else {
            return a.age - b.age;
          }
        }
      },
    },
    {
      title: '性别',
      key: 'gender',
      dataIndex: 'gender',
      valueEnum: {
        0: {
          text: '男',
          status: 'Success',
        },
        1: {
          text: '女',
          status: 'Error',
        },
      },
    },
    {
      title: 'userGroup',
      key: 'userGroup',
      dataIndex: 'userGroup',
      render: (text, record, index) => {
        console.log(record);
        // if (text === null) {
        //   return '-';
        // }
        // return text;
        return text;
      },
    },
    {
      title: '创建时间',
      key: 'createTime',
      dataIndex: 'createTime',
      sorter: (a, b) => a.createTime - b.createTime,
    },
    {
      title: '更新时间',
      key: 'updateTime',
      dataIndex: 'updateTime',
    },
  ];
  return (
    <PageContainer ghost>
      <ProTable
        search={false}
        columns={columns}
        params={{ a: 1 }}
        request={async (params) => {
          const res = await getVenusLocalUserList(params);
          const myData = res.data.map((i) => {
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
