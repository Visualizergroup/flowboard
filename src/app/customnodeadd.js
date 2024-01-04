import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';


const handleStyle = { left: 10 };

function TextUpdaterNodeAdder({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="source" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <label htmlFor="text">Painike:</label>
        <input name="text" placeholder='esim. juhlat' onChange={onChange} className="nodrag" />
      </div>
      
      <Handle type="target" position={Position.Bottom} isConnectable={isConnectable} />
    
    </div>
  );
}

export default TextUpdaterNodeAdder;