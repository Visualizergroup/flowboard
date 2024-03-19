import React from 'react';
//import { useStore } from 'reactflow';

const ConnectionLine = ({ fromX, fromY, toX, toY }) => {
  //const { connectionHandleId } = useStore();

  return (
    <g>
      <path
        fill="none"
        stroke="blue"
        strokeWidth={1.5}
        className="animated"
        d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
      />
      <circle
        cx={toX}
        cy={toY}
        fill="#fff"
        r={3}
        stroke="blue"
        strokeWidth={1.5}
      />
    </g>
  );
};

export default ConnectionLine;