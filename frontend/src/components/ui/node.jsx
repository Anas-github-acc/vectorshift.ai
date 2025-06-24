import * as React from "react"

import { cn } from "../../lib/utils"

function Node({ className, ...props }) {
  return (
    <div
      data-slot="node"
      className={cn(
        "relative bg-node w-[300px] min-w-[300px] text-foreground/60 font-normal flex flex-col gap-3 rounded-xl py-3 px-3 border-1 border-node-border hover:border-blue-3 inset-shadow-sm transition-colors duration-200",
        className
      )}
      {...props}
    />
  )
}

function NodeHeader({ className, ...props }) {
  return (
    <div
      data-slot="node-header"
      className={cn(
        "@container/node-header relative grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 pl-7 [.border-b]:pb-6",
        className
      )}
      {...props}
    >
      {props.children}
      <IconDrag className="h-5 w-5 absolute -top-[1px] -left-1 text-icon-2 fill-icon-2" />
    </div>
  )
}

function NodeTitle({ className, ...props }) {
  return (
    <div
      data-slot="node-title"
      className={cn("leading-none text-foreground/90 text-[15px] font-semibold", className)}
      {...props}
    />
  )
}

function NodeSubTitle({ className, ...props }) {
  return (
    <div
      data-slot="node-subtitle"
      className={cn("flex items-center gap-2 text-foreground/70 text-[13px] font-normal pl-2 py-2", className)}
      {...props}
    />
  )
}

function NodeDescription({ className, ...props }) {
  return (
    <p
      data-slot="node-description"
      className={cn("text-foreground-2 text-[0.8em]", className)}
      {...props}
    />
  )
}

function NodeContent({ className, ...props }) {
  return (
    <div
      data-slot="node-content"
      className={cn(
        "flex justify-between flex-col gap-2",
        className
      )}
      {...props}
    />
  )
}

function NodePannel({className, ...props}) {
  return (
    <div
      data-slot="node-pannel"
      className={cn("absolute top-0 left-[105%] bg-background-2/80 w-[350px] min-w-[350px] text-foreground/80 font-normal flex flex-col gap-3 rounded-xl py-3 px-3 border-none outline-2 outline-blue-400/40 shadow-lg shadow-blue-400/40 inset-shadow-sm transition-[colors, height] duration-200 Z-100",
        className
      )}
      {...props}
    />
  )
}

export const IconDrag = ({className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="4" r="2" />
      <circle cx="17" cy="4" r="2" />
      <circle cx="17" cy="12" r="2" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="8" cy="20" r="2" />
      <circle cx="17" cy="20" r="2" />
    </svg>
  )
} 

export {
  Node,
  NodeHeader,
  NodeTitle,
  NodeContent,
  NodePannel,
  NodeDescription,
  NodeSubTitle
}
