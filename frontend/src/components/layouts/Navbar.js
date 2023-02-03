import React from 'react'
import { Menu} from 'antd';
import { SettingOutlined ,HomeOutlined ,LoginOutlined ,UserAddOutlined, UserOutlined  } from '@ant-design/icons';


import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;




const Navbar = (props) => {
 
         const theme = props.Changethemepage


       
  return (
    <div>
      
        
      <Menu
        mode="horizontal" title='Profile' theme={theme} style={{ width : '100%'}}
      >
      <Menu.Item key="profilelogo" style={{ textAlign:'left',fontSize:'7vh',paddingRight:'5vh' }} ><Link to="/home" >Profile</Link>  </Menu.Item>
      <Menu.Item key="home"  icon={ < HomeOutlined  />} style={{width : "10%"}}><Link to="/home" >Home</Link>  </Menu.Item>
      <Menu.Item key="about"  icon={ <UserOutlined />} style={{width : "10%"}}>about</Menu.Item>
   
      <SubMenu key="subIndex" title="Login" theme='dark' icon={< SettingOutlined />} style={{ marginLeft:'auto'  }}>
        <Menu.ItemGroup title="item 1">
              <Menu.Item  key="Login" icon={ <LoginOutlined />}> <Link to="/login" >Login </Link> </Menu.Item>
              <Menu.Item  key="Signin" icon={ <UserAddOutlined />}><Link to="/register">Signin</Link></Menu.Item>
        </Menu.ItemGroup>
       


      </SubMenu>

        </Menu>

      
    </div>
  )
}

export default Navbar
