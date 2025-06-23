import React from 'react';
 
export default ({ fromX, fromY, toX, toY }) => {
 
  return (
    <g>
      <path
        fill="none"
        strokeWidth={2}
        className="animated stroke-amber-600"
        d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
      />
      <circle
        cx={toX}
        cy={toY}
        className="stroke-amber-600"
        r={5}
        strokeWidth={3}
      />
    </g>
  );
};