import React from 'react';
import { DiFirebase, DiReact, DiAndroid,DiApple } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
  <SectionDivider />
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I have worked with a range of Technologies in the web development world.
  </SectionText>
  <List>
  <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Nodejs and Mongodb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAndroid size="3rem" />
          <DiApple size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Native</ListTitle>
          <ListParagraph>
            Experience with <br />
            React-native
          </ListParagraph>
        </ListContainer>
      </ListItem>
  </List>
  <SectionDivider colorAlt />
 </Section>
);

export default Technologies;
