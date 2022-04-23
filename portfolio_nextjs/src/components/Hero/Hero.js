import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding >
  <LeftSection>
    <SectionTitle main center>
      Welcome to <br/>
      My personal portfolio
    </SectionTitle>
    <SectionText>
      Hi ! There 🖐 I am Manan Khandelwal 
    </SectionText>
    <Button onClick={() => window.location = "https://www.linkedin.com/in/manan-khandelwal-327836167/"} >Learn More</Button>
  </LeftSection> 
  </Section>
);

export default Hero;