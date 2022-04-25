import React,{useState,useEffect} from 'react'
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const abouts =[
  {title : 'Frontend Development', description:'Exerience with react', imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png"},
  {title : 'Backend Develpoment', description:'Experience with mongodb and nodejs', imgUrl:images.mongo},
  {title : 'Native Deveopment', description:'Experience with react native', imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLfJiE1c0866Nyv0ULPhLM_BgEVSid51f-l7d5nak9VDPDGZNxHJ_Urd0WQMM5__Kvdk&usqp=CAU" },
]

const About = () => { 
  return (
   <>
     <h2 className="head-text">Welcome to <br /> <span>MY PORTFOLIO</span> </h2>
    <div className='app__profiles'>
        {abouts.map((about,index)=>(
          <motion.div
         whileInView={{ opacity: 1 }}
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
    </div>
   </>
  )
}

export default About