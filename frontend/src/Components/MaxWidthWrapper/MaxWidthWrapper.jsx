import React from 'react';
import './MaxWidthWrapper.css';

const MaxWidthWrapper = ({children}) => {
  return (
    <div className='max-wrapper'>
        {children}
      
    </div>
  )
}

export default MaxWidthWrapper
