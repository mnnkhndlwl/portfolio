import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white",marginBottom:"20px" }}>
            <img src="https://avatars.githubusercontent.com/u/75252077?s=400&u=82668f8fa49b7ff078eae8b488faee41bf9465d5&v=4"
             style={{ height: "4rem", width: "4rem", borderRadius: "50%", marginRight: "1rem" }} />
             <span style={{ fontSize:"2rem" }}>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
              <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
              <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
              <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/mnnkhndlwl'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/manan-khandelwal-327836167/'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>

  </div>
);

export default Header;
