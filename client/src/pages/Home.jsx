import React from 'react';
import SideBar from '../components/SideBar'
import Thoughts from '../components/Thoughts';


const style = {
  wrapper: `flex justify-center pt-[100px] h-screen w-screen select-none bg-slate-900 text-white `,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

const Home = () => {
  return (
    <main >
      <div className={style.wrapper}>
        <div className={style.content}>
        {/* sidebar component */}
        <SideBar />
        {/* Thoughts component */}
        <Thoughts />
        {/* widgets component */}
        <h1>Widgets</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
