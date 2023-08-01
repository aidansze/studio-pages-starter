export interface HStackProps {
  children?: React.ReactNode;
  space?: string;
}

export const initialProps: HStackProps = {
  space: "1",
};

const HStack = ({ children, space }: HStackProps) => {
  return (<div className={`grid-items-stretch flex items-center space-x-${space}`}>{children}</div>);
};

export default HStack;