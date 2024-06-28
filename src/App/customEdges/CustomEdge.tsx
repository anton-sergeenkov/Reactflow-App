import { BaseEdge, getStraightPath } from "reactflow";

// getBezierPath
// getSimpleBezierPath
// getSmoothStepPath
// getStraightPath

interface ICustomEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

const CustomEdge: React.FC<ICustomEdgeProps> = (props) => {
  const { id, sourceX, sourceY, targetX, targetY } = props;

  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
    </>
  );
};

export default CustomEdge;
