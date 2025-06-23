// inputNode.js
import * as React from 'react';
import { Handle, Position } from '@xyflow/react';
import { BaseNode } from '../components/ui/baseNode';
import {Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"  

export const InputBox = () => {
  return (
    <div>
      <label>
        Input:
        <input type="text" />
      </label>
    </div>
  )
}

export const InputNode = ({ id, data, isConnectable }) => {
  const [input, setInput] = React.useState([
    // {
    //   var: data?.inputName || id.replace('-', '_'),
    //   type: data.inputType || 'Text',
    //   value: ''
    // },
    // {
    //   var: data?.inputName || id.replace('-', '_'),
    //   type: data.inputType || 'Text',
    //   value: ''
    // }
  ]);

  return (
    <BaseNode
      title={data?.title || 'Input Node'}
      addNodeTitle="Add Input"
    >
      {input.map((inputItem, index) => (
        <Input key={index} variant='tab' className='w-full border-2' />
      ))}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        style={{ right: -10 }}
        isConnectable={isConnectable}
      />
    </BaseNode>
  );
}


const SelectElement = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}