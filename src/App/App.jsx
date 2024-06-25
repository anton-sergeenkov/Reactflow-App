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

import { useShallow } from "zustand/react/shallow";
import useStore from "../store/store";

const nodeTypes = {
  nodeRectangle: NodeRectangle,
  nodeRhombus: NodeRhombus,
  nodeRectangleInput: NodeRectangleInput,
};

const edgeTypes = {
  "custom-edge": CustomEdge,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setNodes: state.setNodes,
  setEdges: state.setEdges,
});

const App = () => {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setNodes,
    setEdges,
  } = useStore(useShallow(selector));

  console.log("nodes", nodes);

  return (
    <div className={styles.appWrapper}>
      <div className={styles.canvasWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          // fitView
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          deleteKeyCode="Delete"
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls />
          {/* <MiniMap nodeStrokeWidth={3} zoomable pannable /> */}
        </ReactFlow>
      </div>
      <FigureControls nodes={nodes} setNodes={setNodes} />

      <pre>
        <code>{JSON.stringify(nodes, "", 4)}</code>
      </pre>
    </div>
  );
};

export default App;
