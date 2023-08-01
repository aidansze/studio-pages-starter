export interface HStack3Props {
    children?: React.ReactNode;
    space?: string;
    margin: string;
    NumCols: "1" | "2" | "3" | "4";
  }
  
  export const initialProps: HStack3Props = {
    space: "1",
    margin: "1",
    NumCols: "3",
  };
  
  const HStack3 = ({ children, space, margin, NumCols }: HStack3Props) => {
    return (<div className={`justify-center my-12 grid grid-cols-${NumCols} space-x-${space} mx-${margin}`}>{children}</div>);
  };
  
  export default HStack3;