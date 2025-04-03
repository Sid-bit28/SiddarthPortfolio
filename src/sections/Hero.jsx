import React from 'react';

import PROFILE_PIC from '../assets/images/Profile_Pic.jpg';
import ICON_1 from '../assets/images/Icon_1.png';
import ICON_2 from '../assets/images/Icon_2.png';
import ICON_3 from '../assets/images/Icon_3.png';
import ICON_4 from '../assets/images/Icon_4.png';
import { STATS } from '../utils/data';
import StatInfoCard from '../components/StatInfoCard';

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">
            👋 Hi, I'm Siddarth Banerjee.
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-linear-65 from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Building Scalable & User Friendly apps.
          </h1>

          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I'm passionate Full Stack Frontend Developer crafting responsive
            accessible, and dynamic web applications using React, Node.js and
            TailwindCSS.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
              View My Work
            </button>
            <button className="flex-1 md:flex-none action-btn btn-scale-anim">
              Download Resume
            </button>
          </div>
        </div>

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-purple-100/50 rounded-3xl relative order-1 lg:order-2 mr-12">
          <img
            src={PROFILE_PIC}
            alt="Profile Pic"
            className="profile-pic rounded-3xl"
          />
          <img
            src={ICON_1}
            alt="Icon 1"
            className="icon-img -left-10 bottom-20 rotate-[1.75deg]"
          />
          <img
            src={ICON_2}
            alt="Icon 2"
            className="icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg]"
          />
          <img
            src={ICON_3}
            alt="Icon 3"
            className="icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg]"
          />
          <img
            src={ICON_4}
            alt="Icon 4"
            className="icon-img left-[200px] md:left-[255px] -bottom-6 md:-bottom-10 rotate-[4.75deg]"
          />
        </div>
      </div>
      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map(item => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
