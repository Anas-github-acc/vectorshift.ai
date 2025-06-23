import * as React from "react"

import { cn } from "../../lib/utils"

function Node({ className, ...props }) {
  return (
    <div
      data-slot="node"
        className={cn(
          "bg-node w-[300px] min-w-[300px] text-foreground/60 font-normal flex flex-col gap-3 rounded-xl py-3 px-3 border-1 border-node-border hover:border-blue-3 inset-shadow-sm transition-colors duration-200",
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
      className={cn("leading-none text-[15px] font-semibold", className)}
      {...props}
    />
  )
}

function NodeDescription({ className, ...props }) {
  return (
    <div
      data-slot="node-description"
      className={cn("text-muted-foreground text-sm", className)}
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
  NodeDescription,
}
