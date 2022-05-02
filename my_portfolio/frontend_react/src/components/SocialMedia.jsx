import React from 'react'
import {BsGithub,BsLinkedin} from "react-icons/bs"
import {SiCodechef} from "react-icons/si";

const SocialMedia = () => {
  return (
   <div className="app__social">
       <div>
           <BsGithub onClick={() => window.location = "https://github.com/mnnkhndlwl"}/>
        </div>
        <div>
           <BsLinkedin onClick={() => window.location = "https://www.linkedin.com/in/manan-khandelwal-327836167/"}/>
        </div>
        <div>
            <SiCodechef onClick={() => window.location = "https://www.codechef.com/users/grx9"}/>
        </div>   
   </div>
  )
}

export default SocialMedia