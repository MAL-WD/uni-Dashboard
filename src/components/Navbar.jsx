import React, { useEffect } from 'react';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import Search from '../data/search.svg';
import menu from '../data/menu.svg';
import chat from '../data/chat.svg';
import { Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between py-2 md:ml-3 md:mr-5 relative">
      <div className="left-content align-center">
        <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<img className="w-6 h-6"src={menu}/>} />
        <p>
          <span className="text-gray-400 text-20">Welcome Back ,</span>{' '}
          <span className="text-gray-400 font-bold ml-1 text-20">
            Mohamed!
          </span>
        </p>
      </div>
      <div className="flex">
        <NavButton title="Search" customFunc={() => handleClick('cart')} color={currentColor} icon={<img src={Search} className="w-5 h-5" />} />
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<img src={chat} className="w-5 h-5" />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<img />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
          </div>
        </TooltipComponent>

        {/* {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)} */}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  );
};

export default Navbar;
