import { useCallback } from "react";
import { Position } from "reactflow";
import type { ICustomNodeProps } from "../types";
import cn from "classnames";
import styles from "./styles.module.css";
import Handlers from "../components/Handlers";
import useStore from "../../../store/store";

const NodeRectangle: React.FC<ICustomNodeProps> = (props) => {
  const { data, isConnectable, id, selected } = props;

  const updateNodeLabel = useStore((state) => state.updateNodeLabel);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateNodeLabel(id, event.target.value);
  }, []);

  return (
    <div className={cn(styles.wrapper, selected ? styles.selected : "")}>
      <Handlers position={Position.Top} isConnectable={isConnectable} id={id} />
      <Handlers
        position={Position.Bottom}
        isConnectable={isConnectable}
        id={id}
      />
      <Handlers
        position={Position.Left}
        isConnectable={isConnectable}
        id={id}
      />
      <Handlers
        position={Position.Right}
        isConnectable={isConnectable}
        id={id}
      />

      <input
        name="text"
        onChange={onChange}
        // "nodrag"
        className={cn(styles.input, "nodrag")}
        placeholder={data.label}
      />
    </div>
  );
};

export default NodeRectangle;
