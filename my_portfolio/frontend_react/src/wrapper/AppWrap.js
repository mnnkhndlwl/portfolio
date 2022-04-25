import React from 'react'
import { NavigationDots,SocialMedia } from '../components/index';

const AppWrap = (Component,idName,classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
    <SocialMedia />
    <div className="app__wrapper app__flex">
    {/* specific section that we are going to render */}
      <Component />

      <div className="copyright">
        <p className="p-text">@2022 MANAN</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </div>
    <NavigationDots active={idName} />
  </div>
  );
};

export default AppWrap;