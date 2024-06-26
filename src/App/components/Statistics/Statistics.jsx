import styles from "./styles.module.css";
import useStore from "../../../store/store";

const Statistics = () => {
  const nodes = useStore((state) => state.nodes);

  const nodesData = nodes.map((el) => {
    return {
      id: el.id,
      type: el.type,
      label: el.data.label,
    };
  });

  return (
    <div className={styles.wrapper}>
      <pre>
        <code>{JSON.stringify(nodesData, "", 4)}</code>
      </pre>
    </div>
  );
};

export default Statistics;
