"use client";
import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';
import './index.css';
import Sidebar from './sidebar';
import TextUpdaterNode from './customnode.js';
import TextUpdaterNodeAdder from './customnodeadd.js';
import ViewTextNode from './textComponent.js';
import './textupdater.css';
import ConnectionLine from './Customline.js';





const nodeTypes = { textUpdater: TextUpdaterNode, textUpdatercustom: TextUpdaterNodeAdder, viewText: ViewTextNode };
const initialNodes = [
  {"width":205,"height":89,"id":"1","type":"textUpdater","position":{"x":0,"y":0},"data":{},"positionAbsolute":{"x":0,"y":0}},
  {"width":205,"height":104,"id":"2","type":"viewText","position":{"x":0,"y":117.69697209598206},
  "data":{},"selected":false,"positionAbsolute":{"x":0,"y":117.69697209598206},"dragging":false},
  {"width":198,"height":80,"id":"3","type":"textUpdatercustom","position":{"x":-154.82730992969766,"y":277.9495055332444},
  "data":{},"positionAbsolute":{"x":-154.82730992969766,"y":277.9495055332444},"selected":true,"dragging":false},
  {"width":198,"height":80,"id":"4","type":"textUpdatercustom","position":{"x":220,"y":277.11568436900126},
  "data":{},"positionAbsolute":{"x":220,"y":277.11568436900126},"selected":false,"dragging":false}
    /*{ id: '1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { } },
    { id: '2', type: 'viewText', position: { x: 0, y: 100 }, data: { } },
    { id: '3', type: 'textUpdatercustom', position: { x: -220, y: 200 }, data: { } },
    { id: '4', type: 'textUpdatercustom', position: { x: 220, y: 200 }, data: { } },
  */
  ];
  const initialEdges = [{"source":"2","sourceHandle":"b","target":"1","targetHandle":"asd","id":"reactflow__edge-2b-1asd"},{"source":"4","sourceHandle":null,"target":"2","targetHandle":"a","id":"reactflow__edge-4-2a"},{"source":"3","sourceHandle":null,"target":"2","targetHandle":"a","id":"reactflow__edge-3-2a"}];


  // we define the nodeTypes outside of the component to prevent re-renderings
  // you could also use useMemo inside the component

const defaultViewport = { x: 0, y: 0, zoom: -15 };

let id = 0;
const getId = () => `dndnode_${id++}`;

const snapGrid = [25, 25];

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const flowKey = 'example-flow';
  const [reactFlowInstance, setReactFlowInstance] = useState(null);


  const yPos = useRef(0);

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge({...params,style: { stroke: "blue", strokeWidth: 2 }}, eds));
    },
    [],
  );
  const onSave = useCallback(() => {
    if (reactFlowInstance) {
      const flow = reactFlowInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [reactFlowInstance]);

  const onResetFlow = useCallback(() => {
    setNodes(initialNodes);
    setEdges([]);
  }, [setNodes]);


  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
      }
    };

    restoreFlow();
  }, [setNodes]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
 

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        console.log('invalid element type dropped');
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      if (type !== 'parentElement') {
        console.log('adding node');
        const newNode = {
          id: getId(),
          type,
          position,
          data: { label: `${type} node` },
        };
        setNodes((nds) => nds.concat(newNode));
        return;
      } else {
        console.log('adding group');
        const newNode = {
          id: getId(),
          type: 'group',
          position,
          data: { label: `${type} node` },
          style: { width: 200, height: 200 },
        };
        setNodes((nds) => nds.concat(newNode));

        /*const newChildNode = {
            id: getId(),
            type: 'textUpdatercustom',
            position: { x: 10, y: 10 },
            data: { label: 'child node' },
            parentNode: newNode.id,
            extent: 'parent',
            };
            const newChildNode2 = {
                id: getId(),
                type: 'textUpdatercustom',
                position: { x: 10, y: 10 },
                data: { label: 'child node' },
                parentNode: newNode.id,
                extent: 'parent',
                };

        setNodes((nds) => nds.concat(newChildNode));
        setNodes((nds) => nds.concat(newChildNode2));
        return;*/
      }
    //get the latest node from the nodes array

      
    },
    [reactFlowInstance],
  );
 //use effect to restore saved flow on load
  useEffect(() => {
    onRestore();
  }, []);
  const addNodeFromClick = useCallback( (type, nodeType) => {
    console.log('adding node');
    yPos.current += 10;
    const newNode = {
      id: getId(),
      type: nodeType,
      position: { x: 250, y: yPos.current },
      data: { label: `${type} node` },
    };
    setNodes((nds) => nds.concat(newNode));
    return;
  }
  );
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            connectionLineComponent={ConnectionLine}
            nodeTypes={nodeTypes}
            snapGrid={snapGrid}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            variant="dark"
            style={{ background: '#282a36' }}
            defaultViewport={defaultViewport}

          >
            <Controls />
            <Background color="#2b2b2b" gap={30} size={2} variant="dots" />
            <Panel position="top-left">
        <button className='save-btn' onClick={onSave}>Tallenna</button>
        <button className='save-btn' onClick={onRestore}>Palauta</button>
        <button className='save-btn' onClick={onResetFlow}>Nollaa</button>
      
      </Panel>
          </ReactFlow>
        </div>
        <Sidebar onAdd={addNodeFromClick} />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;