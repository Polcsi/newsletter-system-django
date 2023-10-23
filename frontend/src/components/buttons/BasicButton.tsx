import React from "react";
import { twMerge } from "tailwind-merge";

interface BasicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

type Ref = HTMLButtonElement;

const BasicButton = React.forwardRef<Ref, BasicButtonProps>((props, ref) => {
  const { className, children } = props;

  return (
    <button
      {...props}
      ref={ref}
      className={twMerge(
        "ring-1 ring-gray-900 rounded-full px-4 py-1 font-bold",
        className
      )}
    >
      {children}
    </button>
  );
});

export default BasicButton;
