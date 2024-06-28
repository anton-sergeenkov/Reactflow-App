import { Handle, Position } from "reactflow";

interface IHandlersProps {
  position: Position;
  isConnectable: boolean;
  id: string;
}

const Handlers: React.FC<IHandlersProps> = (props) => {
  const { position, isConnectable, id } = props;

  switch (position) {
    case Position.Top:
      return (
        <Handle
          type="target"
          position={position}
          isConnectable={isConnectable}
          id={id + "-top"}
        />
      );
    case Position.Bottom:
      return (
        <Handle
          type="source"
          position={position}
          isConnectable={isConnectable}
          id={id + "-bottom"}
        />
      );
    case Position.Left:
      return (
        <Handle
          type="source"
          position={position}
          isConnectable={isConnectable}
          id={id + "-left"}
        />
      );
    case Position.Right:
      return (
        <Handle
          type="target"
          position={position}
          isConnectable={isConnectable}
          id={id + "-right"}
        />
      );
  }
};

export default Handlers;
