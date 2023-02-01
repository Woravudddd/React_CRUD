import { Button, Col,Row, Space } from 'antd'

import React, { useEffect, useState } from 'react'
import { loginFunction } from '../../function/auth'


const Login = () => {

  const [value,setValue ] = useState({
    username:"",
    password:"",
    
})

const handleChange = (e) =>{
        
  setValue({...value,
      [e.target.name]:e.target.value }) // ((...value,[oldValue] -> newvalue))
}

useEffect(()=> {
  const valueText = document.getElementById('password')

  const ltext = (valueText.value).length

  if(ltext  >= 10 ) alert('Password to long');


},[value.password])

const handleSubmit = (e) =>{
  e.preventDefault()
  
      loginFunction(value).then((response) => {
              console.log(response)
      }).catch((response) => {

          console.log(response.response.data.message);
      });
  
}


  return (
    <div>
      <Space  direction="vertical"
    style={{
      width: '100%',
    }} >
       <h1>Login Page</h1>
       <Row gutter={[16,16]} style={{marginTop:'3vh'}}>
        <form onSubmit={handleSubmit}>
        <Col span={6} >
        <label>username</label>
        <input type="text" id="username" name="username" onChange={handleChange} />

        </Col>
        <Col span={6} >
        <label>password</label>
        <input type="text" id= "password" name="password" onChange={handleChange} />
           </Col>

           <button className="mt-3" type='submit' id='submit' name='submit'>submit</button>

        </form>
       </Row>
       </Space>
    </div>

    
  )
}

export default Login
