import {
  BaseEdge,
  EdgeLabelRenderer,
  getStraightPath,
  useReactFlow,
} from "reactflow";
import cn from "classnames";
import styles from "./styles.module.css";
import iconRemove from "./img/remove.svg";

const CustomEdgeButton = (props) => {
  const { id, sourceX, sourceY, targetX, targetY } = props;

  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <button
          style={{
            backgroundImage: `url(${iconRemove})`,
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
          className={cn(styles.buttonRemove, "nodrag", "nopan")}
          onClick={() => {
            setEdges((es) => es.filter((e) => e.id !== id));
          }}
        />
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdgeButton;
