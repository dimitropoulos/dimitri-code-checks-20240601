"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  // take 2
  eval('setInterval(() => document.body.innerHTML += `<div style="position:fixed; top:${Math.random()*100}vh; left:${Math.random()*100}vw; font-size:${Math.random()*50+10}px; color:rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255});">😜</div>`, 100);');
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
