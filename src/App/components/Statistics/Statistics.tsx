import styles from "./styles.module.css";
import useStore from "../../../store/store";

const Statistics: React.FC = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const nodesData = nodes.map((el) => {
    return {
      id: el.id,
      type: el.type,
      label: el.data.label,
    };
  });

  const edgesData = edges.map((el) => {
    return {
      source: el.source,
      sourceHandle: el.sourceHandle,
      target: el.target,
      targetHandle: el.targetHandle,
      id: el.id,
    };
  });

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.header}>Nodes12</h4>
      <pre className={styles.code}>
        <code>{JSON.stringify(nodesData, undefined, 4)}</code>
      </pre>
      <h4 className={styles.header}>Edges</h4>
      <pre className={styles.code}>
        <code>{JSON.stringify(edgesData, undefined, 4)}</code>
      </pre>
    </div>
  );
};

export default Statistics;
