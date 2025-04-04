import React from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ tabList, activeTab, onChange }) => {
  const getActiveStyles = value => {
    return activeTab === value
      ? 'bg-linear-65 from-purple-800 to-pink-800 text-white'
      : 'text-secondary bg-transparent';
  };

  return (
    <div className="flex items-center justify-center my-10">
      <div className="bg-[#fff6eb] rounded-full flex">
        {tabList.map(tab => (
          <motion.button
            key={tab.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{
              opacity: activeTab === tab.value ? 1 : 0.8,
              scale: activeTab === tab.value ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
            className={`text-xs md:text-[15x] ${getActiveStyles(
              tab.value
            )} rounded-full px-4 md:px-10 py-[6px] md:py-3 cursor-pointer`}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
