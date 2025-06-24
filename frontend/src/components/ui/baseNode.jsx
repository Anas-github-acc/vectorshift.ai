import React, { useState, createContext, useContext } from "react";
import { Button } from './button';
import { Input } from './input';
import { IconPlus } from '@tabler/icons-react';
import {
  Node,
  NodeContent,
  NodeHeader,
  NodeTitle,
  NodePannel,
} from "./node"
import { cn } from "../../lib/utils";

const plusIcon = <IconPlus className="w-3 h-3" stroke={1} />;


export const NodeContext = createContext(undefined);

export const useBaseNode = () => {
  const context = useContext(NodeContext);
  if (!context) {
    throw new Error("useBaseNode must be used within a BaseNodeProvider");
  }
  return context;
}


function BaseNode({
  id,
  title,
  children,
  addNodeTitle,
  defaultIcon,
}) {
  const { open, setOpen, addNode, setAddNode } = useBaseNode();
  const [ct, setCt] = useState(0);
  const [value, setValue] = useState("");
  
  return (
    <Node>
      <NodeHeader>
        <NodeTitle>{title}</NodeTitle>
      </NodeHeader>
      
      <NodeContent>
        {addNode.map((item, index) => (
          <Input
          key={index}
          value={item.var}
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
            item.var = e.target.value;
          }}
          onClick={() => {
            setOpen(open == null ? index : null);
          }}
          icon={item.icon}
          variant="tab"
          placeholder="custom variable..."
          className="w-full py-4 flex justify-start gap-2 text-foreground/90"
          />
        ))}
        {children}
        {addNodeTitle && (
          <Button
            variant="dashed"
            className="w-full py-4 flex justify-start gap-2 pl-2 text-foreground-2"
            icon={plusIcon}
            icon_position_initial={true}
            onClick={() => {
              setCt(ct + 1);
              setAddNode([...addNode, { var: id+'_'+(ct+1).toString(), type: "string", icon: defaultIcon, value: "" }]);
            }}
          >
            {addNodeTitle}
          </Button>
        )}
      </NodeContent>
    </Node>
  );
}

function BaseNodePannel({children, className, ...props}) {
  const { open, setOpen } = useBaseNode();

  return (
    <NodePannel
      className={cn(className, `${open == null && 'hidden'}`)}
      {...props}
    >
      {children}
    </NodePannel>
  )
}

export { BaseNode, BaseNodePannel };