import iconRhombus from "./img/rhombus.svg";
import iconRectangle from "./img/rectangle.svg";
import styles from "./styles.module.css";

let counter = 0;

const NodeControls = (props) => {
  const { nodes, setNodes } = props;

  const onClickNode = (typeAttr, dataAttr) => {
    const id = "node-" + counter;
    const data = {
      id: id,
      type: typeAttr,
      position: { x: 100, y: 100 },
      data: dataAttr,
    };
    setNodes([...nodes, data]);
    counter++;
  };

  const CONFIG_CONTROLS = [
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

  return (
    <div className={styles.controlsWrapper}>
      {CONFIG_CONTROLS.map((item, index) => (
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
    </div>
  );
};

export default NodeControls;
