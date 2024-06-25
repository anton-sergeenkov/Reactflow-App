import { useCallback } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import Handlers from "../components/Handlers";

// useStore
// useStoreApi

const NodeRectangleInput = (props) => {
  const { data, isConnectable, id, selected } = props;

  const onChange = useCallback((evt) => {
    // console.log(evt.target.value);
  }, []);

  const onClick = () => {
    // store.setState({
    //   ...store.getState(),
    // });
  };

  return (
    <div className={cn(styles.wrapper, selected ? styles.selected : "")}>
      <Handlers position="top" isConnectable={isConnectable} id={id} />
      <Handlers position="bottom" isConnectable={isConnectable} id={id} />
      <Handlers position="left" isConnectable={isConnectable} id={id} />
      <Handlers position="right" isConnectable={isConnectable} id={id} />

      <input
        id="text"
        name="text"
        onChange={onChange}
        className="nodrag"
        placeholder={data.label}
      />
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default NodeRectangleInput;
