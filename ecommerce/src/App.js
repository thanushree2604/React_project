import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
    const [data,setData] = useState(
        {
            username: "",
            email: "",
            password: "",
            repassword:""
        }
    )
    const {username, email, password, repassword} = data
    const changeHandler = e =>
    {
        setData({...data,[e.target.name]: e.target.value})
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== repassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await axios.post("https://testsection-1-default-rtdb.firebaseio.com/users.json", data);
            console.log('Data submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

   //

  return (
    <div>
        <center> 
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='Enter username' name='username' value = {username} onChange={changeHandler}/>
            <br />
            <br />
            <input type='email' placeholder='Enter email'  name='email' value = {email} onChange={changeHandler}/>
            <br />
            <br />
            <input type='password' placeholder='Enter password'  name='password' value = {password} onChange={changeHandler}/>
            <br />
            <br />
            <input type='password' placeholder='Retype password' name='repassword' value = {repassword} onChange={changeHandler} />
            <br />
            <br />
            <input type='submit' name='submit' />
            <br />
        </form>
        </center>
    </div>
  )
}

export default App