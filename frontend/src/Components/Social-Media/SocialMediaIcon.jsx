import React from 'react';
import './SocialMediaIcon.css'
import socialmedia from '../../assets/socialmedia';

const SocialMediaIcon = () => {
    const SocialMedia=(props)=>{
        const {image,className}=props
        return(
            <div>
                <img src={image} className={className}/>

            </div>
        )
    }
  return (
    <div className='social-icon'>
         {socialmedia.map(({image,classname},i)=>{
            return <SocialMedia key={i} image={image} className={classname}/>
         })}

      
    </div>
  )
}

export default SocialMediaIcon
