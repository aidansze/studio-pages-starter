export interface HStack3Props {
    children?: React.ReactNode;
    space?: string;
    justify: "justify-start" | "justify-center" | "justify-end"
    margin: string;
  }
  
  export const initialProps: HStack3Props = {
    space: "1",
    justify: "justify-center",
    margin: "1",
  };
  
  const HStack3 = ({ children, space, justify, margin }: HStack3Props) => {
    return (<div className={`my-12 w-1/3 flex ${justify} space-x-${space} mx-${margin}`}>{children}</div>);
  };
  
  export default HStack3;