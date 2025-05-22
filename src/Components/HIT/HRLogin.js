import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const HRLogin = () => {
    const [userName,setUserName]=useState("")
    const [passWord,setPassWord]=useState("")
    const navigate=useNavigate()
    const loginCheck=(e)=>{
        e.preventDefault();
        if(userName==="Deepu" &&passWord==="Chinnu"){
            navigate("/hrdashboardgshzjzl")
        }else{
            alert("Incorrect UserName & PassWord")
        }

    }
  return (
    <div className='container p-5'>
        <div className='col-8 col-lg-4 mx-auto'>
            <h2 className='text-center'>HR Login</h2>
            <form onSubmit={loginCheck}>
                <input type='text'className='form-control mb-3' name='UserName' placeholder='UserName' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                <input type='text'className='form-control mb-3' name='Password' placeholder='PassWord' value={passWord} onChange={(e)=>setPassWord(e.target.value)}/>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
             
        </div>
    </div>
  )
}

export default HRLogin