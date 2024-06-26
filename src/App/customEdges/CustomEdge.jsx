import { BaseEdge, getStraightPath } from "reactflow";

// getBezierPath
// getSimpleBezierPath
// getSmoothStepPath
// getStraightPath

const CustomEdge = (props) => {
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