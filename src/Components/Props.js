import React from 'react'

const Props = ({title,cat,path}) => {
    
  return (
    <div className='containeer'>
        <p>Title:{title}</p>
        <p>Cat:{cat}</p>
        <img src={path}/>


    </div>
  )
}

export default Props