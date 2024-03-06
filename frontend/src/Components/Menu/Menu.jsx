import React from 'react';
import './Menu.css';

export default function Menu({number,menu}) {
  return (
    <div className='menu-item'>
        <li className='menu-number'>{number}</li>
        
         <a href='#'>   <li className='menu-list'>{menu}</li></a>

        

      
    </div>
  )
}
