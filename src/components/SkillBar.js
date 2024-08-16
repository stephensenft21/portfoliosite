import React, { useEffect, useState } from 'react';

const SkillBar = ({ skill, percentage }) => {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setFill(percentage);
    }, 500);
  }, [percentage]);

  return (
    <div className="mb-4">
      <h4 className="text-xl font-semibold text-primary">{skill}</h4>
      <div className="w-full bg-secondary rounded-full h-4">
        <div 
          className="bg-highlight h-4 rounded-full transition-width duration-500 ease-in-out"
          style={{ width: `${fill}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
