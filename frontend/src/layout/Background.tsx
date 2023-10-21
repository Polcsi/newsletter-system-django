import React from "react";

interface BackgroundProps {
  children?: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="w-screen h-full flex justify-center">
      <main className="w-[95%] max-w-[1200px]">{children}</main>
    </div>
  );
};

export default Background;
