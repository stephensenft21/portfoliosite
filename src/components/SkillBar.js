import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
const SkillBar = ({ skill, percentage }) => {
  const props = useSpring({
    width: percentage + '%',
    from: { width: '0%' },
    config: { tension: 220, friction: 20 }
  });

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-base font-semibold text-gray-700">{skill}</span>
        <span className="text-sm font-medium text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4">
        <animated.div
          style={props}
          className="bg-blue-600 h-4 rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;


