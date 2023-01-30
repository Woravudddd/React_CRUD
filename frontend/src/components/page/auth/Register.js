import React ,{ useEffect, useState } from 'react'
import { registerFunction } from '../../function/auth'
const Register = () => {
    const [value,setValue ] = useState({
        username:"",
        password:"",
        confirm_password:"",
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
        
        if(value.password != value.confirm_password){
                alert('Password not dupicate')

        }else{
            registerFunction(value).then((response) => {
                    console.log(response)
            }).catch((response) => {

                console.log(response.response.data.message);
            });
        }
    }

  return (
    <div>
        <section>
       
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input type="text" id="username" name="username" onChange={handleChange} />
        <label>password</label>
        <input type="text" id= "password" name="password" onChange={handleChange} />
        <label>Confirm-password</label>
        <input type="text" name="confirm_password"  onChange={handleChange} disabled={value.password < 6} />
        <button disabled={value.password < 6} className="mt-3" type='submit' id='submit' name='submit'>submit</button>
      </form>
      </section>
    </div>
  )
}

export default Register
