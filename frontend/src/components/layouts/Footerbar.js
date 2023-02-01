import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
 
const { Footer } = Layout;

const Footerbar = () => {
  return (
    <div>
         <Footer
       
        style={{
          marginTop: '5vh',
          textAlign: 'center',
          background: 'black',
          color: 'white',
          
        }}
        
      >
         Profile
      </Footer>
      
    </div>
  )
}

export default Footerbar


