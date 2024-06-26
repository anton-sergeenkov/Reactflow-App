import iconRhombus from "./img/rhombus.svg";
import iconRectangle from "./img/rectangle.svg";
import iconClean from "./img/clean.svg";

import styles from "./styles.module.css";
import useStore from "../../../store/store";

let counter = 0;

const NodeControls = () => {
  const nodes = useStore((state) => state.nodes);
  const setNodes = useStore((state) => state.setNodes);
  const setEdges = useStore((state) => state.setEdges);

  const onClickNode = (typeAttr, dataAttr) => {
    const id = "node-" + counter;
    const data = {
      id: id,
      type: typeAttr,
      position: { x: counter * 10 + 10, y: counter * 10 + 10 },
      data: dataAttr,
    };
    setNodes([...nodes, data]);
    counter++;
  };

  const CONFIG_NODE_CONTROLS = [
    {
      type: "nodeRectangle",
      name: "Rectangle",
      data: { label: "Text" },
      icon: iconRectangle,
    },
    {
      type: "nodeRhombus",
      name: "Rhombus",
      data: { label: "Text" },
      icon: iconRhombus,
    },
  ];

  const onClickClean = () => {
    setNodes([]);
    setEdges([]);
    counter = 0;
  };

  return (
    <div className={styles.controlsWrapper}>
      {CONFIG_NODE_CONTROLS.map((item, index) => (
        <button
          key={index}
          className={styles.control}
          onClick={() => onClickNode(item.type, item.data)}
        >
          {item.icon ? (
            <img src={item.icon} alt={item.name} title={item.name} />
          ) : (
            <span>{item.name}</span>
          )}
        </button>
      ))}

      <button className={styles.control} onClick={() => onClickClean()}>
        <img src={iconClean} alt="Clean" title="Clean" />
      </button>
    </div>
  );
};

export default NodeControls;
