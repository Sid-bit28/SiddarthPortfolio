import React from 'react';

import PROFILE_PIC from '../assets/images/Profile_Pic.jpg';
import { ABOUT_ME } from '../utils/data';

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-8 py-16">
      <h4 className="block lg:hidden w-[200px] section-title text-left mb-16">
        About Me
      </h4>
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-purple-100/50 rounded-3xl mx-auto">
          <img
            src={PROFILE_PIC}
            alt="Profile Pic"
            className="profile-pic rounded-3xl mr-6 md:mr-0 md:ml-5"
          />
        </div>
        <div className="flex-1">
          <h4 className="hidden lg:block w-[200px] section-title text-left">
            About Me
          </h4>
          <p
            className='text-sm
            text-justify
            leading-6
            whitespace-pre-line
            mt-4"'
          >
            {ABOUT_ME.content}
          </p>

          <div className="flex gap-4 mt-6">
            {ABOUT_ME.socialLinks.map(social => (
              <a
                key={social.label}
                className="cursor-pointer group"
                href={social.link}
                target="_blank"
              >
                <social.icon className="text-2xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
