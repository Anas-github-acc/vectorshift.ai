import * as React from "react"
import { IconSearch } from '@tabler/icons-react';
import { cn } from "../../lib/utils"

function Input({ className, className_2, type, variant, icon, ...props }) {
  const variants = {
    text: "",
    tab: "border-foreground-1 font-normal hover:border-foreground-1 hover:text-blue-3 bg-transparent text-foreground rounded-[6px]",
    search: "text-foreground border-border-2/80 bg-background/80 outline-2 outline-transparent focus-within:border-transparent focus-within:outline-2 focus-within:outline-blue-1/80 transition-[outline-color] duration-200 ease-in-out",
  }

  const icons = {
    "search": <IconSearch className="h-4 w-4 shrink-0" />
  }

  return (
    <div className={cn("relative flex items-center w-full justify-center", className_2)}>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground/80 font-[400] placeholder:text-foreground/30 selection:bg-primary selection:text-primary-foreground border-input flex h-8 w-full rounded-md border-1 bg-transparent px-3 py-1 text-base shadow-xs file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          icon ? "pl-8" : "pl-3",
          variants[variant],
          className
        )}
        {...props}
      />
      <span className="absolute left-2 text-icon-2">
        {icons[icon ? icon : variant]}
      </span>
    </div>
  )
}
export { Input }
