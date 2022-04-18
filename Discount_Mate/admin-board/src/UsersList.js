import './App.css';
import {Table, Divider, Input, Button} from 'antd';
import React, { useEffect, useState } from 'react';
import RefAutoComplete from 'antd/lib/auto-complete';
      
const UsersList = () => {
const[selectedKeys,setSelectedKeys] = useState()
const[dataSource, setdataSource] = useState()

useEffect(() => {
    setdataSource(data)
    console.log('running')
},[]);

const columns = [
    {
        title: 'User id',
        dataIndex: 'id',
        filterDropdown: ({setSelectedKeys, confirm, clearFilters}) =>{
            return <>
            <Input
            autoFocus
            placeholder='Search...'
            onChange={(e) =>{setSelectedKeys(e.target.value ? [e.target.value] : [])}}
            onPressEnter={() => {
                confirm();
            }}
        
            />
            <Button onClick={() => {clearFilters()}}>Clear</Button>
            </>
            
        },

        onFilter: (value, record) =>{
            return record.id.includes(value)
        }
        
    },
    {
        title: 'Username',
        dataIndex: 'name',
        filterDropdown: ({setSelectedKeys, confirm}) =>{
            return <Input
            autoFocus
            placeholder='Search...'
            onChange={(e) =>{setSelectedKeys(e.target.value ? [e.target.value] : [])}}
            onPressEnter={() => {
                confirm();
            }}
            onBlur={() => {
                confirm();
            }}
            />
        },

        onFilter: (value, record) =>{
            return record.name.toLowerCase().includes(value.toLowerCase())
        }
    },
    {
        title: 'Email',
        dataIndex: 'email',
        filterDropdown: ({setSelectedKeys, confirm}) =>{
            return <Input
            autoFocus
            placeholder='Search...'
            onChange={(e) =>{setSelectedKeys(e.target.value ? [e.target.value] : [])}}
            onPressEnter={() => {
                confirm();
            }}
            onBlur={() => {
                confirm();
            }}
            />
        },

        onFilter: (value, record) =>{
            return record.email.toLowerCase().includes(value.toLowerCase())

        }
    },
    {
        title: 'Password',
        dataIndex: 'pwd',
        filterDropdown: ({setSelectedKeys, confirm}) =>{
            return <Input
            autoFocus
            placeholder='Search...'
            onChange={(e) =>{setSelectedKeys(e.target.value ? [e.target.value] : [])}}
            onPressEnter={() => {
                confirm();
            }}
            onBlur={() => {
                confirm();
            }}
            />
        },

        onFilter: (value, record) =>{
            return record.pwd.toLowerCase().includes(value.toLowerCase())

        }
    },
    {
        title: 'Permission',
        dataIndex: 'permission',
        filterDropdown: ({setSelectedKeys, confirm}) =>{
            return <Input
            autoFocus
            placeholder='Search...'
            onChange={(e) =>{setSelectedKeys(e.target.value ? [e.target.value] : [])}}
            onPressEnter={() => {
                confirm();
            }}
            onBlur={() => {
                confirm();
            }}
            />
        },

        onFilter: (value, record) =>{
            return record.permission.toLowerCase().includes(value.toLowerCase())

        }
    },
    {
        title: 'Postcode',
        dataIndex: 'postcode',
        filterDropdown: ({setSelectedKeys, confirm}) =>{
            return <Input
            autoFocus
            placeholder='Search...'
            onChange={(e) =>{setSelectedKeys(e.target.value ? [e.target.value] : [])}}
            onPressEnter={() => {
                confirm();
            }}
            onBlur={() => {
                confirm();
            }}
            />
        },

        onFilter: (value, record) =>{
            return record.postcode.toLowerCase().includes(value.toLowerCase())

        }
    },
    {
        title: 'SearchRadius',
        dataIndex: 'searchradius',
        filterDropdown: ({setSelectedKeys, confirm}) =>{
            return <Input
            autoFocus
            placeholder='Search...'
            onChange={(e) =>{setSelectedKeys(e.target.value ? [e.target.value] : [])}}
            onPressEnter={() => {
                confirm();
            }}
            onBlur={() => {
                confirm();
            }}
            />
        },

        onFilter: (value, record) =>{
            return record.searchradius.toLowerCase().includes(value.toLowerCase())

        }
    },
    {
        title: 'Status',
        dataIndex: 'status',
        filterDropdown: ({setSelectedKeys, confirm}) =>{
            return <Input
            autoFocus
            placeholder='Search...'
            onChange={(e) =>{setSelectedKeys(e.target.value ? [e.target.value] : [])}}
            onPressEnter={() => {
                confirm();
            }}
            onBlur={() => {
                confirm();
            }}
            />
        },

        onFilter: (value, record) =>{
            return record.status.toLowerCase().includes(value.toLowerCase())

        }
    },
    ];
    const data = [
    {
        key: '1',
        id: '001',
        name: 'AA',
        address: 'New York No. 1 Lake Park',
        status:'1'
    },
    {
        key: '2',
        id: '002',
        name:'BB',
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        id: '003',
        name: 'CC',
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        id: '004',
        name: 'DD',
        address: 'Sidney No. 1 Lake Park',
    },
    ];
        
const rowSelection = {
onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    setSelectedKeys(selectedRowKeys)
},

};

const DeleteRow = () => {
    const fliteredList = dataSource.filter((Item => selectedKeys.includes(Item.key) === false));
    console.log('xxx', selectedKeys)
    setdataSource(fliteredList)
}

const Enable = () => {
    const newlist = dataSource.map( pre => {
        if (selectedKeys.includes(pre.key)){
            const update = {
                ...pre,
                status: 'enable',
            }
            return update;
        }
        return pre;
    })
   setdataSource(newlist);
}

const Disable = () => {
    const newlist = dataSource.map( pre => {
        if (selectedKeys.includes(pre.key)){
            const update = {
                ...pre,
                status: 'disable',
            }
            return update;
        }
        return pre;
    })
   setdataSource(newlist);
}

return (
    <div>
        <Button style={{marginRight: 10}} onClick={Enable}>Enable</Button>
        <Button  style={{marginRight: 10}} onClick={Disable}>Disable</Button>
        <Button onClick={DeleteRow}>Delete</Button>

        <Divider />

        <Table
            rowSelection={{
            type: 'checkbox',
            ...rowSelection,
            }}
            scroll={{x:true}}
            pagination={{pageSize: 15}}
            columns={columns}
            dataSource={dataSource}
        />
    </div>
);
};

export default UsersList;