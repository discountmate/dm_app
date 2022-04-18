import './App.css';
import {Table, Divider, Input, Button} from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

      
const ShopList = () => {
const[selectedKeys,setSelectedKeys] = useState()
const[dataSource, setdataSource] = useState()
const[newAddress, setnewAddress] = useState()
const[newName, setnewName] = useState()
const[newItemid, setnewItemid] = useState()
const[newPostcode, setnewPostcode] = useState()
const[editing, setEditing] = useState(false);


useEffect(() => {
    getData()
    console.log(dataSource)
},[]);

const columns = [
    {
        title: 'Id',
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
        title: 'Shop',
        dataIndex: 'name',
        render: (text, record) => {
            if(editing === true) {
                return (
                    <Input 
                    defaultValue={record.name}
                    onChange={e => record.name = e.target.value}/>
                )
            }else{
                return text
            }
        },
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
        title: 'Address',
        dataIndex: 'address',
        render: (text, record) => {
            if(editing === true) {
                return (
                    <Input 
                    defaultValue={record.address}
                    onChange={e => record.address = e.target.value}/>
                )
            }else{
                return text
            }
        },
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
        title: 'Postcode',
        dataIndex: 'postcode',
        render: (text, record) => {
            if(editing === true) {
                return (
                    <Input 
                    defaultValue={record.postcode}
                    onChange={e => record.postcode = e.target.value}/>
                )
            }else{
                return text
            }
        },
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
    ];

        
const rowSelection = {
onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    setSelectedKeys(selectedRowKeys)
},

};

const getData = async () => {
    const result = await axios.get('http://localhost:3000/shop')
    if (!result) {return;}
    setdataSource(result.data)
}

const DeleteRow = () => {
    const fliteredList = dataSource.filter((Item => selectedKeys.includes(Item.id) === false));
    console.log('xxx', selectedKeys)
    setdataSource(fliteredList)
}
const AddRow = () => {
    const new_product = {
        id:newItemid,
        name:newName,
        address:newAddress,
        postcode:newPostcode
      
    };
    console.log(new_product)
    setdataSource((current) => {
        return [...current, new_product]
    });
}

return (
    <div>
        <Input placeholder='Id' onChange={e => setnewItemid(e.target.value)}/>
        <Input placeholder='Shop' onChange={e => setnewName(e.target.value)}/>
        <Input placeholder='Address' onChange={e => setnewAddress(e.target.value)}/>
        <Input placeholder='Postcode' onChange={e => setnewPostcode(e.target.value)}/>
        <Button  style={{marginRight: 10}} onClick={AddRow}>Add</Button>
        <Button  style={{marginRight: 10}} onClick={DeleteRow}>Delete</Button>
        <Button onClick={() => setEditing(!editing)}>
            {editing ? 'Cancel' : 'Edit'}
        </Button>

        <Divider />

        <Table
            rowSelection={{
            type: 'checkbox',
            ...rowSelection,
            }}
            scroll={{x:true}}
            pagination={{pageSize: 10}}
            rowKey='id'
            columns={columns}
            dataSource={dataSource}
        />
    </div>
);
};

export default ShopList;