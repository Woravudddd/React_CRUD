import { LaptopOutlined, NotificationOutlined, UserOutlined ,HomeOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme ,Switch } from 'antd';
import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Anchor } from 'antd';

import Register from './components/page/auth/Register';
import Login from './components/page/auth/Login';
import Homepage from './components/page/Homepage';
import Navbar from './components/layouts/Navbar';
import Footerbar from './components/layouts/Footerbar';

const { Header, Content } = Layout;


const App = () => {
  const [theme , setTheme] = useState('dark')


 

  const Changetheme = (theme) =>{

    setTheme(theme ? 'dark' : 'light');
}
        
  
  return (
    <Layout style={{ minHeight: '100vh' }} >

          <Switch
        checked={theme === 'dark'}
        onChange={Changetheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      
       < Navbar  Changethemepage = {theme}/>
    
      <Content
        style={{
          padding: '0 50px',
        }}
      >
       
        <Layout
          style={{
            marginTop: '3vh',
            padding: '24px 0',
           // background: colorBgContainer,
          }}
        >   
          <Content
            style={{
              padding: '0 24px',
              minHeight: 400,
            }}
          >
           
       <Routes>
          <Route path='/home' element={<Homepage />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
       </Routes>
          </Content>
        </Layout>
      </Content>
     <Footerbar Changethemepage = {theme} />
    </Layout>
  );
};

export default App