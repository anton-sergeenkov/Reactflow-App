import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  useEdgesState,
  useNodesState,
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import styles from "./styles.module.css";
import FigureControls from "./components/FigureControls/FigureControls";

import NodeRectangle from "./customNodes/NodeRectangle/NodeRectangle";
import NodeRhombus from "./customNodes/NodeRhombus/NodeRhombus";
import NodeRectangleInput from "./customNodes/NodeRectangleInput/NodeRectangleInput";

import CustomEdge from "./customEdges/CustomEdge";
// import CustomEdgeButton from "./customEdges/CustomEdgeButton";

const nodeTypes = {
  nodeRectangle: NodeRectangle,
  nodeRhombus: NodeRhombus,
  nodeRectangleInput: NodeRectangleInput,
};

const edgeTypes = {
  "custom-edge": CustomEdge,
};

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (connection) => {
      const edge = {
        ...connection,
        type: "custom-edge",
        // type: "smoothstep",
        // label: "Hello",
      };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  return (
    <div className={styles.appWrapper}>
      <div className={styles.canvasWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          deleteKeyCode="Delete"
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls />
          {/* <MiniMap nodeStrokeWidth={3} zoomable pannable /> */}
        </ReactFlow>
      </div>
      <FigureControls nodes={nodes} setNodes={setNodes} />
    </div>
  );
};

export default App;
