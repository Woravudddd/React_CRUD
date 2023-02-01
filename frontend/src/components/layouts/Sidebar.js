import { Breadcrumb, Layout, Menu, theme } from 'antd';

import SubMenu from 'antd/es/menu/SubMenu';
import Title from 'antd/es/skeleton/Title';
 
const {  Sider } = Layout;


const Sidebar = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <div>
        <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"

              style={{
                height: '100%',
              }}
          
            >
              <Title key="profile" >Profile</Title>
              <SubMenu  key="experienceTitle" title="experience" >
                <Menu.ItemGroup>
                    <Menu.Item key='expreience1'>Work1</Menu.Item>
                   < Menu.Item key='expreience2'>Work2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              

            </Menu>
          </Sider>
      
    </div>
  )
}

export default Sidebar
