import * as React from "react"

import { cn } from "../../lib/utils"

function Node({ className, ...props }) {
  return (
    <div
      data-slot="node"
      className={cn(
        "bg-node text-node-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
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
        "@container/node-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=node-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function NodeTitle({ className, ...props }) {
  return (
    <div
      data-slot="node-title"
      className={cn("leading-none font-semibold", className)}
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

function NodeAction({ className, ...props }) {
  return (
    <div
      data-slot="node-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function NodeContent({ className, ...props }) {
  return (
    <div
      data-slot="node-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function NodeFooter({ className, ...props }) {
  return (
    <div
      data-slot="node-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Node,
  NodeHeader,
  NodeFooter,
  NodeTitle,
  NodeAction,
  NodeDescription,
  NodeContent,
}
