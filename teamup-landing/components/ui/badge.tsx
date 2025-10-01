import * as React from "react";

export function Badge({ className = "", style, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  const base = "inline-flex items-center rounded-full px-2 py-1 text-xs";
  return <span className={`${base} ${className}`} style={style} {...props} />;
}
