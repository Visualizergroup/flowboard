import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" id='asd' position={Position.Bottom} isConnectable={isConnectable} />
      <div>
        <label htmlFor="text">Start:</label>
        <textarea id="text-area" name="text" onChange={onChange} className="nodrag" placeholder="esim. Kuinka voin auttaa 👋?" />
        
      </div>
      
    </div>
  );
}

export default TextUpdaterNode;