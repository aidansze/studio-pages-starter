export interface HStackAdvProps {
    children?: React.ReactNode;
    space?: string;
    justify: "justify-start" | "justify-center" | "justify-end"
    margin: string;
  }
  
  export const initialProps: HStackAdvProps = {
    space: "1",
    justify: "justify-center",
    margin: "1",
  };
  
  const HStackAdv = ({ children, space, justify, margin }: HStackAdvProps) => {
    return (<div className={`flex ${justify} space-x-${space} mx-${margin}`}>{children}</div>);
  };
  
  export default HStackAdv;