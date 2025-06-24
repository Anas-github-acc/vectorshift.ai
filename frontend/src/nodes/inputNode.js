// inputNode.js
import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import {
  BaseNode,
  NodeContext,
  BaseNodePannel,
} from '../components/ui/baseNode';
import {
  NodeTitle,
  NodeContent,
  NodeDescription,
  NodeSubTitle
} from '../components/ui/node';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { RxText } from "react-icons/rx";

const textIcon = <RxText  className="w-5 h-5 text-green-800 font-[700]" />; 

export const InputNode = ({ id, data, isConnectable }) => {
  const [ open, setOpen ] = useState(null);
  const [addNode, setAddNode] = useState([
    {
      var: data?.inputName || id.replaceAll('-','_'),
      type: data.inputType || 'Text',
      icon: textIcon,
    },
  ]);
  
  return (
    <NodeContext.Provider value={{ open, setOpen, addNode, setAddNode }}>
      <BaseNode
        id={id.replaceAll('-','_').slice(0, -2)}
        title={data?.title || 'Input Node'}
        addNodeTitle="Add Input"
        defaultIcon={textIcon}
      >
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}`}
          style={{ right: -10 }}
          isConnectable={isConnectable}
        />

        <BaseNodePannel>
          <NodeTitle>{data?.title || 'Input Node'}</NodeTitle>
          <NodeDescription>
            Pass data of different types into your workflow.
          </NodeDescription>
          <NodeContent>
            <div>
              <NodeSubTitle>Types
                <HiOutlineQuestionMarkCircle className='w-4 h-4 text-foreground/30' />
              </NodeSubTitle>
              <SelectElement />
            </div>
          </NodeContent>
        </BaseNodePannel>

      </BaseNode>
    </NodeContext.Provider>
  );
}

const SelectElement = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="select a type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Type</SelectLabel>
          <SelectItem value="text">Text</SelectItem>
          <SelectItem value="file">File</SelectItem>
          <SelectItem value="image">image</SelectItem>
          <SelectItem value="audio">Audio</SelectItem>
          <SelectItem value="boolean">Boolean</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}