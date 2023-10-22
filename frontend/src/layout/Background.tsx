import React from "react";

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

type Ref = HTMLDivElement;

const Background = React.forwardRef<Ref, BackgroundProps>((props, ref) => {
  const { children } = props;

  return (
    <div className="w-full h-full flex justify-center" ref={ref}>
      <main className="w-[95%] max-w-[1200px]">{children}</main>
    </div>
  );
});

export default Background;
