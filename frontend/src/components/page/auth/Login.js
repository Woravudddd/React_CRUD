import { Button, Col,Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import './login.css'
import { loginFunction } from '../../function/auth'
import { useDispatch } from 'react-redux'
import { increment,decrement } from '../../reducers/UseReducers'
import { useNavigate } from 'react-router-dom'

const Login = ({ history }) => {
  //call dispatch
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [value,setValue ] = useState({
    username:"",
    password:"",
    
})


const roleCheck = (role) => {
  if(role === 'admin'){

            navigate('/admin/index')
  }else{

            navigate('/user/index')
  }
}

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
              dispatch(increment({            token: response.data.token,
                                              username: response.data.payload.user.username,
                                              role : response.data.payload.user.role,
                                           
                                              })
              );
              localStorage.setItem('token',response.data.token)
              roleCheck(response.data.payload.user.role);                         

      }).catch((response) => {

          console.log(response.data.message);
      });
  
}

return (
    <div id="body" name="body" style={{ 
      backgroundImage: `url("data:image/jpeg;base64,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")`
      ,height: 'auto',
      width: '100%'
    }}>
      <div  >
      <Space  direction="vertical"
    style={{
      width: '100%',
    }} >
       <h1 name="Titlepages">Login Page</h1>
       <Row gutter={[16,16]} style={{marginTop:'3vh'}}>
        <form onSubmit={handleSubmit}>
        <Col span={6} >
        <label className='labeltext'name='labeltext'>username</label>
        <input  type="text" id="username" name="username" onChange={handleChange} />

        </Col>
        <Col span={6} >
        <label className='labeltext' name='labeltext'>password</label>
        <input type="text" id= "password" name="password" onChange={handleChange} />
           </Col>

           <button   name='submit' className="mt-3" type='submit' id='submit'>Submit</button>

        </form>
       </Row>
       </Space>
       </div>
    </div>

    
  )
}

export default Login
