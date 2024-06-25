import cn from "classnames";
import styles from "./styles.module.css";
import Handlers from "../components/Handlers";

const NodeRectangle = (props) => {
  const { data, isConnectable, id, selected } = props;

  return (
    <div className={cn(styles.wrapper, selected ? styles.selected : "")}>
      <Handlers position="top" isConnectable={isConnectable} id={id} />
      <Handlers position="bottom" isConnectable={isConnectable} id={id} />
      <Handlers position="left" isConnectable={isConnectable} id={id} />
      <Handlers position="right" isConnectable={isConnectable} id={id} />

      <div className={styles.text}>{data.label}</div>
    </div>
  );
};

export default NodeRectangle;
