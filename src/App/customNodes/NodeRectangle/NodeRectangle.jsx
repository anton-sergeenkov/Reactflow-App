import { useCallback } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import Handlers from "../components/Handlers";
import useStore from "../../../store/store";

const NodeRectangle = (props) => {
  const { data, isConnectable, id, selected } = props;

  const updateNodeLabel = useStore((state) => state.updateNodeLabel);

  const onChange = useCallback((evt) => {
    updateNodeLabel(id, evt.target.value);
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

export default NodeRectangle;
