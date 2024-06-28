export type ICustomNodeCommonDataProps = {
  label: string;
};

export interface ICustomNodeProps {
  data: ICustomNodeCommonDataProps;
  isConnectable: boolean;
  id: string;
  selected: boolean;
}
