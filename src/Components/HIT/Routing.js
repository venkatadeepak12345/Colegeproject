import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Table from './Table'
import Branches from '../Branches'
import Artifical from './Artifical'
import Cse from './Cse'
import Mec from './Mec'
import Bio from './Bio'
import Civil from './Civil'
import Elec from './Elec'
import HRLogin from './HRLogin'
import HRdashboard from './HRdashboard'
import Contact from './Contact'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/table' element={<Table/>}/>
            <Route path='/branches' element={<Branches/>}/>
            <Route path='/artifical' element={<Artifical/>}/>
            <Route path='/computer' element={<Cse/>}/>
            <Route path='/mechanical' element={<Mec/>}/>
            <Route path='/civil' element={<Civil/>}/>
            <Route path='/medical' element={<Bio/>}/>

            <Route path='/electrical' element={<Elec/>}/>
            <Route path='/contact' element={<Contact/>}/>
            
            <Route path='/hrlogin' element={<HRLogin/>}/>
            <Route path='/hrdashboardgshzjzl' element={<HRdashboard/>}/>
           
        
        </Routes>
        
    </div>
  )
}

export default Routing