import React, { useState } from "react";
import SideBarOptions from "../SideBarOptions";
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from "react-icons/ri";
import { BsPerson, BsPersonFill, BsChatDotsFill, BsChatDots, BsCardList, BsCalendar4Week, BsCalendar2WeekFill  } from 'react-icons/bs'





const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  iconContainer: `text-3xl m-4`,
  logoutButton: `bg-cyan-400 hover:bg-cyan-500 flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  navButtons: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
};



function SideBar({initialSelectedIcon}) {
  const [selected, setSelected] = useState('Home')

  return (
    <div className={style.wrapper}>
      <div className={style.iconContainer}>
        <h1>Babble</h1>
      </div>
      <div className={style.navContainer}>
        <SideBarOptions
          Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
          text="Home"
          isActive={Boolean(selected === "Home")}
          setSelected={setSelected}
         
        />
        <SideBarOptions
                  Icon={selected === "Profile" ? BsPersonFill : BsPerson}
                  text="Profile"
                  isActive={Boolean(selected === "Profile")}
                  setSelected={setSelected}
         />
   
        <SideBarOptions
                  Icon={selected === "Chat" ? BsChatDotsFill : BsChatDots}
                  text="Chat"
                  isActive={Boolean(selected === "Chat")}
                  setSelected={setSelected}
         />
        <SideBarOptions
                  Icon={selected === "Events" ? BsCalendar2WeekFill : BsCalendar4Week}
                  text="Events"
                  isActive={Boolean(selected === "Events")}
                  setSelected={setSelected}
         />
        <SideBarOptions
                  Icon={selected === "Lists" ? RiFileList2Fill : BsCardList }
                  text="Lists"
                  isActive={Boolean(selected === "Lists")}
                  setSelected={setSelected}
         />
   
        
        <div className={style.logoutButton}>Logout</div>
      </div>
    </div>
  );
}

export default SideBar;
