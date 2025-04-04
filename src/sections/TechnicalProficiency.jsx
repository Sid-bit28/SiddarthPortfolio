import React, { useState } from 'react';

import { SKILLS, SKILL_TABS } from '../utils/data';
import Tabs from '../components/Tabs';
import SkillCard from '../components/SkillCard';

const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState('all');

  const handleTabValueChange = value => {
    if (value === 'all') {
      setTabData(SKILLS);
      setActiveTab('all');
    } else {
      const updatedList = SKILLS.filter(skill => skill.type === value);
      setTabData(updatedList);
      setActiveTab(value);
    }
  };

  return (
    <section id="skills" className="bg-background mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Technical Proficiency</h4>

          <p className="text-sm text-center mt-4 leading-6">
            A versatile developer with hands-on expertise in modern
            technologies, tools, and frameworks, dedicated to building
            efficient, scalable, and user-centric solutions.
          </p>
        </div>
        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
          tabData={tabData}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
          {tabData.map((skill, index) => (
            <div key={skill.id}>
              <SkillCard
                icon={<skill.icon className="w-6 h-6 text-primary" />}
                skillName={skill.skill}
                description={skill.description}
                progress={skill.progress}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
