"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarTabs, useSidebar } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import {
  TooltipContent,
  TooltipTrigger,
  Tooltip,
  TestTooltip
} from "./ui/tooltip"
 
import { motion } from "motion/react";
import { cn } from "../lib/utils";


export function SidebarMain() {
  const tabs = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <></>
    // <TestTooltip />
    // <Tooltip>
    //   {/* <Sidebar open={open} setOpen={setOpen}>
    //     <SidebarBody className="justify-between"
    //       onMouseLeave={() => setOpen(false)}>
    //       <div className="flex flex-1 flex-col gap-2">
    //           {tabs.map((tab, idx) => (
    //             <SidebarTabs key={idx} tabs={tab}
    //               onClick={() => setOpen(true)}
    //             />
    //           ))}
    //       </div> */}

    //       <TooltipTrigger asChild>
    //         <button>Hello</button>
    //       </TooltipTrigger>
    //       <TooltipContent side="right" className="w-40">
    //         <p>Hello anas</p>
    //       </TooltipContent>
          
    //     {/* </SidebarBody> */}
    //   {/* </Sidebar> */}
    // </Tooltip>
  )
}