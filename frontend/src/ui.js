// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------
import React, { useRef, useCallback } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  useReactFlow,
  ConnectionMode,
  MiniMap,
} from '@xyflow/react';
import { InputNode } from './nodes/inputNode';
import { OutputNode } from './nodes/outputNode';
import { SemanticSearchNode } from './nodes/semanticSearchNode';
import { GoogleSearchNode } from './nodes/googleSearchNode';
import { OpenAINode } from './nodes/openaiNode';

import '@xyflow/react/dist/style.css';

import ConnectionLine from './nodes/utils/connectionLine';
import DeleteEdge from './nodes/utils/deleteEdge';
import SelfConnectingEdge from './nodes/utils/SelfConnectingEdge';

let id = 0;
const getId = (type) => `${type}-${id++}`;

const gridSize = 17;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  'custom-input': InputNode,
  'custom-output': OutputNode,
  'semantic-search': SemanticSearchNode,
  'google-search': GoogleSearchNode,
  'openai': OpenAINode,
};
const edgeTypes = {
  'self-connecting': SelfConnectingEdge,
  'delete-edge': DeleteEdge,
}

export const UI = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const { screenToFlowPosition } = useReactFlow();

    const onConnect = useCallback(
      (params) => setEdges((eds) => addEdge({...params, type: 'delete-edge'}, eds)),
      [setEdges],
    );

    const getInitNodeData = (nodeID, type) => {
      let nodeData = { id: nodeID, nodeType: `${type}` };
      return nodeData;
    }
    
    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
      (event) => {
        event.preventDefault();
        
        if (event?.dataTransfer?.getData('application/reactflow')) {
          const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
          const type = appData?.nodeType;

          if (typeof type === 'undefined' || !type) {
            return;
          }
    
          const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          });
        
          const nodeID = getId(type)

          const newNode = {
            id: nodeID,
            type,
            position,
            data: getInitNodeData(nodeID, type),
          };

          setNodes((nds) => nds.concat(newNode));
        }
      },
      [screenToFlowPosition],
    );

    return (
      <div ref={reactFlowWrapper} className='relative w-[100%] bg-background border-1 border-border-1 mr-3 mb-3 rounded-[10px] overflow-hidden'>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          proOptions={proOptions}
          connectionMode={ConnectionMode.Loose}
          connectionLineComponent={ConnectionLine}
        >
            <Background className='stroke-grid' size={2} gridSize={gridSize} />
            <Controls position='right-0 bottom-10' />
            {/* <MiniMap className='bg-background! rounded-[12px] text-background/80!'/> */}
        </ReactFlow>
      </div>
    )
}

export const PipelineUI = () => (
  <>
    <UI />
  </>
);