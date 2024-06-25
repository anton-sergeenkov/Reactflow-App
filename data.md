## CustomEdge

```jsx
import { BaseEdge } from "reactflow";

import {
  getBezierPath
  getSimpleBezierPath
  getSmoothStepPath
  getStraightPath
} from "reactflow";


const CustomEdge = (props) => {
  const { id, sourceX, sourceY, targetX, targetY } = props;

  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return <BaseEdge id={id} path={edgePath} />;
};

export default CustomEdge;
```

---

### Line Style

```jsx
const connectionLineStyle = { stroke: "#c4c4c4" };

const edgeOptions = {
  type: "smoothstep",
  style: {
    stroke: "#2b2b2b",
  },
};

<ReactFlow
  connectionLineStyle={connectionLineStyle}
  defaultEdgeOptions={edgeOptions}
/>;
```

---

### classNames

```html
<div className="nodrag nopan" />
```

Запрет перетаскивания холста

---

### Handle

```jsx
const handleStyle = { left: 50, background: "blue" };

<Handle
  type="target" // "source" | "target"
  position={Position.Top}
  isConnectable={isConnectable}
  id={id + "-top"}
  style={handleStyle}
/>;
```

---

### onConnect

```jsx
const onConnect = useCallback(
  (connection) => setEdges((eds) => addEdge(connection, eds)),
  [setEdges]
);
```

---

### Input

```jsx
import { useCallback } from "react";

const ElementInput = (props) => {
  const { data, isConnectable, id } = props;

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return <input type="text" onChange={onChange} />;
};

export default ElementInput;
```

---

### ReactFlow

```jsx
<ReactFlow fitView />
```

---

### initialNodes и initialEdges

**type**

- `"default"` - edge top, bottom
- `"input"` - edge bottom
- `"output"` - edge top
- `"group"` - нет edge, нет label. как-то по-другому используется

```jsx
export const initialNodes = [
  {
    id: "node1",
    // type: "default" | "input" | "output" | "group",
    position: { x: 100, y: 100 },
    data: { label: "Node 1" },
    style: { backgroundColor: "#6ede87", color: "white" },
  },
  {
    id: "node2",
    position: { x: 100, y: 100 },
    data: {
      label: <span style={{ color: "yellowgreen" }}>Node 2</span>,
    },
  },
];

export const initialEdges = [
  { id: "edge1", source: "node1", target: "node2" },
  {
    id: "edge2",
    source: "node2",
    target: "node3",
    type: "step",
    label: "to the",
  },
];

const edge = {
  id: "1-2", // ID линии
  source: "1", // От какого Node выходит
  target: "2", // В какой Node приходит
  label: "to the", // Метка
  type: "step", // Тип линии
  animated: true, // Анимированная пунктирная линия
  sourceHandle: "a",
};
```
