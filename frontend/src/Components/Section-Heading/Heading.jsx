import React from 'react'
import Button from '../Button/Button'

const Heading = ({title}) => {
  return (
    <div className='section-title'>
        <div>{title}
        <Button text='Contact Us'/>
        </div>
        <hr/>

      
    </div>
  )
}

export default Heading
