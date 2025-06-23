import * as React from 'react';
import { Button } from './button';
import { IconPlus } from '@tabler/icons-react';
import {
  Node,
  NodeContent,
  NodeDescription,
  NodeHeader,
  NodeTitle,
} from "./node"

const plusIcon = <IconPlus className="w-3 h-3" stroke={1} />;

function BaseNode({ title, children, addNodeTitle }) {

  return (
    <Node>
      <NodeHeader>
        <NodeTitle>{title}</NodeTitle>
      </NodeHeader>
      
      <NodeContent>
        {children}
        {addNodeTitle && (
          <Button
            variant="dashed"
            className="w-full py-4 flex justify-start gap-2 pl-2 text-foreground-2"
            icon={plusIcon}
            icon_position_initial={true}
            >
            {addNodeTitle}
          </Button>
        )}
      </NodeContent>
    </Node>
  );
}

export { BaseNode };