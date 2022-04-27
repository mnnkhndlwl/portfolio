import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        Skills
      </h2>
      <div className="app__skills-container">
        <motion.div
         className="app__skills-list"
        >
          
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills,'skills');