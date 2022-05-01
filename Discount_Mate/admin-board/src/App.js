import './App.css';
import {Button, Input, Tabs} from 'antd';
import UsersList from './UsersList';
import ProductsList from './ProductsList';
import ShopList from './ShopList';
import { useState } from 'react';

function App() {
  const axios = require('axios')
  const { TabPane } = Tabs;
  const [login, setlogin] = useState(false)
  const [username, setUsername] = useState('')
  const [pwd, setpwd] = useState('')
  const [message, setMessage] = useState('')
  const checkLogin = async () => {
    
    const result = await axios.post('http://localhost:3000/login', {
      username:'admin',
      password:'test'
    })


    console.log(result)
    if(username !== 'admin01' && pwd !== '111222333'){setMessage('Login Failed'); return ;}
    setlogin(true)

  }
  return (
    <div className="Main">
      {login ?
        <Tabs tabPosition='left' >
        <TabPane tab="Users" key="1">
          <UsersList/>
        </TabPane>
        <TabPane tab="Product" key="2">
          <ProductsList/>
        </TabPane>
        <TabPane tab="Shop" key="3">
          <ShopList/>
        </TabPane>
      </Tabs> :
      <>
      <h>Discount mate Admin Login</h>
      <Input placeholder='user' onChange={e => setUsername(e.target.value)}/>
      <Input placeholder='password' onChange={e => setpwd(e.target.value)}/>
      <Button onClick={checkLogin}>Log in</Button>
      </>
      }
     
      <h>{message}</h>
    </div>
  );
}

export default App;
