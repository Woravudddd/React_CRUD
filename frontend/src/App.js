import { LaptopOutlined, NotificationOutlined, UserOutlined ,HomeOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Anchor } from 'antd';

import Register from './components/page/auth/Register';
import Login from './components/page/auth/Login';
import Homepage from './components/page/Homepage';
import Navbar from './components/layouts/Navbar';
import Footerbar from './components/layouts/Footerbar';

const { Header, Content } = Layout;


const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }} >
      
       < Navbar />
    
      <Content
        style={{
          padding: '0 50px',
        }}
      >
       
        <Layout
          style={{
            marginTop: '3vh',
            padding: '24px 0',
            background: colorBgContainer,
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
     <Footerbar />
    </Layout>
  );
};

export default App