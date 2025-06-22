"use client";
import { cn } from "../../lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip"
 
// interface Links {
//   label: string;
//   href: string;
//   icon: React.JSX.Element | React.ReactNode;
// }
 
// interface SidebarContextProps {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   animate: boolean;
// }
 
const SidebarContext = createContext(
  undefined
);
 
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
 
export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}) => {
  const [openState, setOpenState] = useState(false);
 
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;
 
  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};
 
export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};
 
export const SidebarBody = (props) => {
  return (
    <>
        <DesktopSidebar {...props} />
        <MobileSidebar {...(props)} />
    </>
  );
};
 
export const DesktopSidebar = ({
  className,
  children,
  ...props
}) => {
  const { open, animate } = useSidebar();

  return (
    <>
      <motion.div
        layout
        className={cn(
          "h-full px-2 hidden md:flex md:flex-col bg-transparent w-[60px] shrink-0",
          className
        )}
        animate={{
          width: animate ? (open ? "280px" : "60px") : "280px",
        }}
        // onMouseEnter={() => setOpen(true)}
        // onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};
 
export const MobileSidebar = ({
  className,
  children,
  ...props
}) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <IconMenu2
            className="text-neutral-800 dark:text-neutral-200"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-transparent p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
 
export const SidebarTabs = ({
  tabs,
  className,
  ...props
}) => {
  const { open, animate } = useSidebar();
  return (
    <span
    className={cn(
        "h-10 w-10 flex items-center justify-center group/sidebar rounded-md cursor-pointer hover:bg-hover focus:bg-hover/80 p-[12px] text-foreground/80",
        className
      )}
      {...props}
      >
    </span>
  );
};