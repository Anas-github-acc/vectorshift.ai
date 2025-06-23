import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from '@xyflow/react';
import { IconCircleXFilled } from '@tabler/icons-react';
 
export default function DeleteEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
 
  const { setEdges } = useReactFlow();
  const onEdgeClick = () => {
    setEdges((edges) => edges.filter((edge) => edge.id !== id));
  };
 
  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} className='edge'></BaseEdge>
        <EdgeLabelRenderer>
          <div
            className="button-edge__label"
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            }}
          >
            <button className="button-edge__button" onClick={onEdgeClick}>
              <IconCircleXFilled className="w-4 h-4" />
            </button>
          </div>
        </EdgeLabelRenderer>
    </>
  );
}