import './App.css';
import React, { useEffect, useState } from 'react';
import {Table, Divider, Button, Input, Result} from 'antd';

const ProductsList = () => {

const axios = require('axios');
const[selectedKeys,setSelectedKeys] = useState()
const[dataSource, setdataSource] = useState()
const[newShopid, setnewShopid] = useState()
const[newName, setnewName] = useState()
const[newItemid, setnewItemid] = useState()
const[newItemCate, setnewItemCate] = useState()
const[newItemPrice, setnewItemPrice] = useState()
const[newItemDiscountPrice, setnewItemDiscountPrice] = useState()
const[newItemDiscountPer, setItemDiscountPer] = useState()
const[newSale, setnewSale] = useState()
const[newItemDiscountDate, setItemDiscountDate] = useState()
const[editing, setEditing] = useState(false)

useEffect(() => {
    GetData()
    console.log(dataSource)
},[3000]);

const columns = [
    {
        title: 'Item id',
        dataIndex: 'id',
        filterDropdown: ({setSelectedKeys, confirm}) =>{
            return <Input
            autoFocus
            placeholder='Search...'
            onChange={(e) =>{setSelectedKeys(e.target.value ? [e.target.value] : [])}}
            onPressEnter={() => {
                confirm();
            }}
            />
        },

        onFilter: (value, record) =>{
            return record.id.toString().includes(value)

        }
    },
    {
        title: 'Shop id',
        dataIndex: 'shopid',
        render: (text, record) => {
            if(editing === true) {
                return (
                    <Input 
                    defaultValue={record.shopid}
                    onChange={e => record.shopid = e.target.value}/>
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
            return record.shopid.toString().includes(value)

        }
    },
    {
        title: 'Name',
        dataIndex:  'name',
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
        title: 'Category',
        dataIndex:  'category',
        render: (text, record) => {
            if(editing === true) {
                return (
                    <Input 
                    defaultValue={record.category}
                    onChange={e => record.category = e.target.value}/>
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
            return record.category.toLowerCase().includes(value.toLowerCase())

        }
    },
    {
        title: 'Price',
        dataIndex:  'price',
        render: (text, record) => {
            if(editing === true) {
                return (
                    <Input 
                    defaultValue={record.price}
                    onChange={e => record.price = e.target.value}/>
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
            return record.price.includes(value)

        }
    },
    {
        title: 'Discount %',
        dataIndex:  'discountpercentage',
        render: (text, record) => {
            if(editing === true) {
                return (
                    <Input 
                    defaultValue={record.discountpercentage}
                    onChange={e => record.discountpercentage = e.target.value}/>
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
            return record.discountpercentage.includes(value)

        }
    },
    {
        title: 'Discount Price',
        dataIndex:  'discountprice',
        render: (text, record) => {
            if(editing === true) {
                return (
                    <Input 
                    defaultValue={record.discountprice}
                    onChange={e => record.discountprice = e.target.value}/>
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
            return record.discountprice.includes(value)

        }
    },
    {
        title: 'Sale',
        dataIndex:  'sale',
        render: (text, record) => {
            if(editing === true) {
                return (
                    <Input 
                    defaultValue={record.sale}
                    onChange={e => record.sale = e.target.value}/>
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
            return record.sale.toString().includes(value)

        }
    },
    {
        title: 'Discount end',
        dataIndex:  'discountend',
        render: (text, record) => {
            if(editing === true) {
                return (
                    <Input 
                    defaultValue={record.discountend}
                    onChange={e => record.discountend = e.target.value}/>
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
            return record.discountend.includes(value)

        }
    },
    
    ];
        
const rowSelection = {
onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    setSelectedKeys(selectedRowKeys)
},

};

const GetData = async () => {
    const result = await axios.get("http://localhost:3000/item")
    if (!result) {return;}
    setdataSource(result.data)
}
    
const DeleteRow = () => {
    const fliteredList = dataSource.filter((Item => selectedKeys.includes(Item.id) === false));
    setdataSource(fliteredList)
}

const AddRow = () => {
    const new_product = {
        id:newItemid,
        shopid:newShopid,
        name:newName,
        category:newItemCate,
        price:newItemPrice,
        discountprice:newItemDiscountPrice,
        discountpercentage:newItemDiscountPer,
        sale:newSale,
        discountend:newItemDiscountDate,
    };
    console.log(new_product)
    setdataSource((current) => {
        return [...current, new_product]
    });
}

return (
    <div>
        <div>
            <Input placeholder='Item id' onChange={e => setnewItemid(e.target.value)}/>
            <Input placeholder='Shop id' onChange={e => setnewShopid(e.target.value)}/>
            <Input placeholder='Name' onChange={e => setnewName(e.target.value)}/>
            <Input placeholder='Category' onChange={e => setnewItemCate(e.target.value)}/>
            <Input placeholder='Price' onChange={e => setnewItemPrice(e.target.value)}/>
            <Input placeholder='Discount %' onChange={e => setItemDiscountPer(e.target.value)}/>
            <Input placeholder='Discount Price' onChange={e => setnewItemDiscountPrice(e.target.value)}/>
            <Input placeholder='Sale' onChange={e => setnewSale(e.target.value)}/>
            <Input placeholder='Discount end' onChange={e => setItemDiscountDate(e.target.value)}/>
        </div>
      
        <Button style={{marginRight: 10}} onClick={AddRow}>Add</Button>
        <Button style={{marginRight: 10}} onClick={DeleteRow}>Delete</Button>
        {editing ? <Button onClick={() => setEditing(false)}>Cancel</Button>:
        <Button onClick={() => setEditing(true)}>Edit</Button>}

    <Divider />

    <Table
        rowSelection={{
        type: 'checkbox',
        ...rowSelection,
        }}
        rowKey='id'
        pagination={{ pageSize: 15}}
        scroll={{x:true}}
        columns={columns}
        dataSource={dataSource}
    />
    </div>
);
};


export default ProductsList;