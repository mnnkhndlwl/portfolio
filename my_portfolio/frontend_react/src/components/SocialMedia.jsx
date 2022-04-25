import React from 'react'
import {BsGithub,BsLinkedin} from "react-icons/bs"
import {SiCodechef} from "react-icons/si";

const SocialMedia = () => {
  return (
   <div className="app__social">
       <div>
           <BsGithub />
        </div>
        <div>
           <BsLinkedin />
        </div>
        <div>
            <SiCodechef />
        </div>   
   </div>
  )
}

export default SocialMedia