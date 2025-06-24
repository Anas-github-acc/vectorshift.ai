// OutputNode.js
import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Textarea } from '../components/ui/textarea';
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
import { LuFileOutput } from "react-icons/lu";

const OutputIcon = <LuFileOutput className="w-5 h-5 text-amber-500 font-[700]" />;

export const OutputNode = ({ id, data, isConnectable }) => {
  const [ open, setOpen ] = useState(null);
  const [addNode, setAddNode] = useState([
    {
      var: data?.inputName || id.replaceAll('-','_'),
      type: data.inputType || 'Text',
      icon: OutputIcon,
    },
  ]);
  
  return (
    <NodeContext.Provider value={{ open, setOpen, addNode, setAddNode }}>
      <BaseNode
        id={id.replaceAll('-','_').slice(0, -2)}
        title={data?.title || 'Output Node'}
        addNodeTitle="Add Output"
        defaultIcon={OutputIcon}
      >
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}`}
          style={{ left: -10 }}
          isConnectable={isConnectable}
        />

        <BaseNodePannel>
          <NodeTitle>{data?.title || 'Output Node'}</NodeTitle>
          <NodeDescription>
            Output data of different types from your workflow.
          </NodeDescription>
          <NodeContent>
            <div>
              <NodeSubTitle>Type
                <HiOutlineQuestionMarkCircle className='w-4 h-4 text-foreground/30' />
              </NodeSubTitle>
              <SelectElement />
            </div>
            <div>
              <NodeSubTitle>Output
              </NodeSubTitle>
              <Textarea placeholder="Use {{...}} for variable use..." />
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