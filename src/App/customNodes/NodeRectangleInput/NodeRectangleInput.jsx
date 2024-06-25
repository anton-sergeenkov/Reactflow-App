import { useCallback } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import Handlers from "../components/Handlers";

import useStore from "../../../store/store";

// useStore
// useStoreApi

const NodeRectangleInput = (props) => {
  const { data, isConnectable, id, selected } = props;

  const updateNodeColor = useStore((state) => state.updateNodeLabel);
  // const nodes = useStore((state) => state.nodes);

  console.log(nodes);

  const onChange = useCallback((evt) => {
    updateNodeColor(id, evt.target.value);
  }, []);

  return (
    <div className={cn(styles.wrapper, selected ? styles.selected : "")}>
      <Handlers position="top" isConnectable={isConnectable} id={id} />
      <Handlers position="bottom" isConnectable={isConnectable} id={id} />
      <Handlers position="left" isConnectable={isConnectable} id={id} />
      <Handlers position="right" isConnectable={isConnectable} id={id} />

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

export default NodeRectangleInput;
