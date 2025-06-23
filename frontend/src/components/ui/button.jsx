"use client";
import React from "react";
import { cn } from "../../lib/utils";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "primary" | "secondary" | "outline" | "destructive" | "ghost" | "link"
//   icon?: "share" | "play"
//   size?: "sm" | "md" | "lg"
//   children: React.ReactNode
// }

export const Ping = ({...props}) => {
  return (
    <span class="absolute flex size-2 -top-[1.5px] -right-[1.5px]">
      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      <span class="relative inline-flex size-2 rounded-full bg-sky-500"></span>
    </span>
  )
}


export const Button = React.forwardRef(
  ({
    className,
    variant = "primary",
    icon = null,
    icon_position_initial = false,
    size = "md",
    children,
    ...props
  }, ref) => {
    const baseStyles =
      "flex border-1 border-white/10 items-center justify-center rounded-[4px] gap-[5px] font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
      primary:"bg-[#555555]/20 text-[#ffffff]/70 hover:bg-[#555555]/35 active:bg-[#555555]/20",
      blue: "bg-[#0076ff]/25 text-[#70b8ff] hover:bg-[#0076ff]/35 active:bg-[#0076ff]/20",
      green: "bg-[#3ECF7F]/25 text-[#85E0AB] hover:bg-[#3ECF7F]/35 active:bg-[#3ECF7F]/20",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100",
      dashed: "border-transparent font-normal border-dashed hover:border-blue-3 hover:text-blue-3 bg-transparent text-foreground rounded-[6px] active:border-blue-3/60 active:text-blue-3/60",
      destructive: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
      ghost: "text-gray-700 hover:bg-gray-100 active:bg-gray-200",
      link: "text-blue-600 underline-offset-4 hover:underline active:text-blue-800",
    }

    const sizes = {
      sm: "h-[32px] px-3 text-[0.8125rem]/[2px]",
      md: "h-[32px] px-4 text-[0.875rem]/[2px]",
      lg: "h-[32px] px-6 text-[1rem]/[2px]",
    }

    return (
      <button className={cn(baseStyles, variants[variant], sizes[size], className)} ref={ref} {...props}>
        {icon && icon_position_initial && icon}
        <p className='pt-[1px]'>
          {children}
        </p>
        {icon && !icon_position_initial && icon}
      </button>
    )
  },
) 

Button.displayName = "Button";