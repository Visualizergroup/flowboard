import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function ViewTextNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" id='a' position={Position.Bottom} isConnectable={isConnectable} />
      <div>
        <label htmlFor="text">Näkymän teksti:</label>
        <textarea name="text" onChange={onChange} className="nodrag text-box" placeholder="esim. Minkälaista tilaisuutta olet järjestämässä?" />
        
      </div>
      <Handle type="source" id='b' position={Position.Top} isConnectable={isConnectable} />
    </div>
  );
}

export default ViewTextNode;