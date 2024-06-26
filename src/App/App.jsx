import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import styles from "./styles.module.css";

import NodeControls from "./components/NodeControls/NodeControls";
import Statistics from "./components/Statistics/Statistics";

import NodeRhombus from "./customNodes/NodeRhombus/NodeRhombus";
import NodeRectangle from "./customNodes/NodeRectangle/NodeRectangle";

import CustomEdge from "./customEdges/CustomEdge";
import CustomEdgeButton from "./customEdges/CustomEdgeButton";

import { useShallow } from "zustand/react/shallow";
import useStore from "../store/store";

const nodeTypes = {
  nodeRhombus: NodeRhombus,
  nodeRectangle: NodeRectangle,
};

const edgeTypes = {
  // "custom-edge": CustomEdge,
  "custom-edge": CustomEdgeButton,
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
          <MiniMap nodeStrokeWidth={3} zoomable pannable />
        </ReactFlow>
      </div>
      <NodeControls />
      <Statistics />
    </div>
  );
};

export default App;
