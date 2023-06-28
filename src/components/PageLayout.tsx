import { HexColor } from "@yext/studio";
import React from 'react';

export interface PageLayoutProps {
  children: React.ReactNode;
  backgroundColor?: HexColor;
}

export const initialProps = {
  backgroundColor: "#FFFFFF",
};

const PageLayout = ({ children, backgroundColor }: PageLayoutProps) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor }}>
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
