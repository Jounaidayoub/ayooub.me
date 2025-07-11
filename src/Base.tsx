import React from "react";
import type { ReactNode } from "react";
type BaseProps = { children: ReactNode };
const Base = ({ children }: BaseProps) => {
  // return <div className="flex-auto min-w-0 flex flex-col px-6 sm:px-4 md:px-0 max-w-[624px] w-full mx-auto">{children}</div>;
  return <div className="mx-auto max-w-[800px] w-full min-h-screen">{children}</div>;
};

export default Base;
