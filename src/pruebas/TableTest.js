import React from 'react'
import { Table, Divider, Button, Icon, Input } from 'antd';
import Highlighter from 'react-highlight-words';


// const getColumnSearchProps = dataIndex => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//         <div style={{ padding: 8 }}>
//             <Input
//                 ref={node => {
//                     this.searchInput = node;
//                 }}
//                 placeholder={`Search ${dataIndex}`}
//                 value={selectedKeys[0]}
//                 onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//                 onPressEnter={() => handleSearch(selectedKeys, confirm)}
//                 style={{ width: 188, marginBottom: 8, display: 'block' }}
//             />
//             <Button
//                 type="primary"
//                 onClick={() => handleSearch(selectedKeys, confirm)}
//                 icon="search"
//                 size="small"
//                 style={{ width: 90, marginRight: 8 }}
//             >
//                 Search
//         </Button>
//             <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//                 Reset
//         </Button>
//         </div>
//     ),
//     filterIcon: filtered => (
//         <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
//     ),
//     onFilter: (value, record) =>
//         record[dataIndex]
//             .toString()
//             .toLowerCase()
//             .includes(value.toLowerCase()),
//     onFilterDropdownVisibleChange: visible => {
//         if (visible) {
//             setTimeout(() => this.searchInput.select());
//         }
//     },
//     render: text => (
//         <Highlighter
//             highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//             searchWords={[this.state.searchText]}
//             autoEscape
//             textToHighlight={text.toString()}
//         />
//     ),
// });

// const handleSearch = (selectedKeys, confirm) => {
//     confirm();
//     this.setState({ searchText: selectedKeys[0] });
// };

// const handleReset = clearFilters => {
//     clearFilters();
//     this.setState({ searchText: '' });
// };

const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 150,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 150,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
      width: 150,
    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];
  
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  
const TableTest = () => {
    return (
        <>
            <h2>Table test</h2>
            <Table dataSource={data} columns={columns} pagination={'{ pageSize: 100 }'} scroll={{ x: 1500, y: 500 }} bordered />
        </>
    )
}

export { TableTest as default }