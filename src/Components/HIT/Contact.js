import React, { useState } from 'react'

const Contact = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
    const [errors,setErrors]=useState({})
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prevData)=>({
            ...prevData,[name]:value
        }))
    }
    const validate=()=>{
        const newErrors={}
        if(!formData.name.trim()){
            newErrors.name="Name is Required!"
        }
        if(!formData.email.includes("@")){
            newErrors.email="Invalid Email!"
        }
        if(formData.password.length<6){
            newErrors.password="PassWord Must be atleast 6 characters!"
        }
        return newErrors
    }
    const handdleSubmit=(e)=>{
        e.preventDefault()
        const validateErrors=validate();
        if(Object.keys(validateErrors).length===0){
            alert('Form Submitted Successfully');
      console.log('Submitted data:', formData);
      setFormData({name:"",email:"",password:""})
        setErrors({})
        }else{
            setErrors (validateErrors)
        }
        
    }

  return (
    <div className='container'>
        <strong>Login In</strong>
        <form onSubmit={handdleSubmit}>
            <input type='text' name='name' placeholder='UserName' value={formData.name} onChange={handleChange} className='form-control'/>
            {errors.name && <p className='text-danger'>{errors.name}</p>}
            <br></br>
            <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} className='form-control'/>
            {errors.email && <p className='text-danger'>{errors.email}</p>}
            <br></br>
            <input type='tel' name='password' placeholder='PassWord' value={formData.password} onChange={handleChange} className='form-control'/>
            {errors.password && <p className='text-danger'>{errors.password}</p>}
            <br></br>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>

    </div>
  )
}

export default Contact