import React, { useEffect, useState } from 'react'
import { Breadcrumb, Layout, Menu, theme  } from 'antd';

const { Footer } = Layout;

const Footerbar = (props) => {
  
  console.log(props.Changethemepage)


  
  return (
    
    <div>
    
       <Footer style={{ backgroundColor : props.Changethemepage+'blue' ,
                        textAlign: 'center',
                        color:'dark' }}  >

                &copy; Woravud Duangoracha  


           
                        
      </Footer>
         
    
      
    </div>
  )
}

export default Footerbar


