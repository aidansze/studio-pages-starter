import { Markdown as MarkdownInternal } from "@yext/react-components";
import React from 'react';


export interface MarkdownProps {
    value?: string;
  }
  
  export const initialProps: MarkdownProps = {
    value: "Some Markdown",
  };
  
  const MarkdownComp = ({ value }: MarkdownProps) => {
    return (
        <div className="mt-4 space-y-6">
        <MarkdownInternal content={`${value}`} ></MarkdownInternal>
        </div>
    );
  };
  
  export default MarkdownComp;
  