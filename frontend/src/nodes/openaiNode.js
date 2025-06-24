// OpenAINode.js
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
import { IconBrandOpenai } from '@tabler/icons-react';

const OpenAIIcon = <IconBrandOpenai className="w-5 h-5 text-black" />;

export const OpenAINode = ({ id, data, isConnectable }) => {
  const [ open, setOpen ] = useState(null);
  const [addNode, setAddNode] = useState([
    {
      var: data?.inputName || id.replaceAll('-','_'),
      type: data.inputType || 'Text',
      icon: OpenAIIcon,
    },
  ]);
  
  return (
    <NodeContext.Provider value={{ open, setOpen, addNode, setAddNode }}>
      <BaseNode
        id={id.replaceAll('-','_').slice(0, -2)}
        title={data?.title || 'OpenAI Node'}
        addNodeTitle="Add Model"
        defaultIcon={OpenAIIcon}
      >
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-1`}
          style={{ left: -10, top: 20 }}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-2`}
          style={{ left: -10, top: 120 }}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-3`}
          style={{ right: -10 }}
          isConnectable={isConnectable}
        />

        <BaseNodePannel>
          <NodeTitle>{data?.title || 'Output Node'}</NodeTitle>
          <NodeDescription>
            Output data of different types from your workflow.
          </NodeDescription>
          <NodeContent>
            <div>
              <NodeSubTitle>System (Instruction)
                <HiOutlineQuestionMarkCircle className='w-4 h-4 text-foreground/30' />
              </NodeSubTitle>
              <Textarea placeholder="Write your system instruction here..." />
            </div>
            <div>
              <NodeSubTitle>Prompt
                <HiOutlineQuestionMarkCircle className='w-4 h-4 text-foreground/30' />
              </NodeSubTitle>
              <Textarea placeholder="Write your prompt here..." className={"min-h-40px"} />
            </div>
            <div>
              <NodeSubTitle>Model
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
    <Select defaultValue="gpt-4.1">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="select a model that u can afford..." />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectItem value="model1">gpt-4.5-preview</SelectItem>
          <SelectItem value="model2">o3-mini</SelectItem>
          <SelectItem value="model3">o3</SelectItem>
          <SelectItem value="model4">o4-mini</SelectItem>
          <SelectItem value="model5">o1</SelectItem>
          <SelectItem value="model6">o1-mini</SelectItem>
          <SelectItem value="model7">o1-preview</SelectItem>
          <SelectItem value="model8">gpt-4.1</SelectItem>
          <SelectItem value="model9">gpt-4.1-mini</SelectItem>
          <SelectItem value="mode20">gpt-4</SelectItem>
          <SelectItem value="model21">gpt-3.5-turbo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}