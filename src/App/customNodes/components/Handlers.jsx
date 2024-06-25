import { Handle, Position } from "reactflow";

const Handlers = (props) => {
  const { position, isConnectable, id } = props;

  switch (position) {
    case "top":
      return (
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
          id={id + "-top"}
        />
      );
    case "bottom":
      return (
        <Handle
          type="source"
          position={Position.Bottom}
          isConnectable={isConnectable}
          id={id + "-bottom"}
        />
      );
    case "left":
      return (
        <Handle
          type="source"
          position={Position.Left}
          isConnectable={isConnectable}
          id={id + "-left"}
        />
      );
    case "right":
      return (
        <Handle
          type="target"
          position={Position.Right}
          isConnectable={isConnectable}
          id={id + "-right"}
        />
      );
  }
};

export default Handlers;
