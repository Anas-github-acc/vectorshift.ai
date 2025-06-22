"use client";
import React, { useState } from "react";
import { PipelineToolbar } from "../toolbar";
import { Sidebar, SidebarBody, SidebarTabs } from "./ui/sidebar";
import {
  IconHome,
  IconSettings,
  IconArrowLeft,
  IconLayoutSidebarRightExpand,
  IconLayoutSidebarLeftExpand,
} from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip"

export function SidebarMain() {
  const tabs = [
    {
      label: "Home",
      href: "#",
      icon: (
        <IconHome className="h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Nodes",
      href: "#",
      icon: (
        <IconNodes className="h-5 w-5 shrink-0 stroke-icon" />
      ),
      content: (
        <PipelineToolbar />
      )
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
  const [ tabContent, setTabContent ] = useState(null);

  return (
    <Sidebar open={open} setOpen={setOpen} tabContent={tabContent}>
      <SidebarBody className="relative flex justify-between">
        <div className="flex flex-1 flex-col gap-2">
            {tabs.map((tab, idx) => (
              <Tooltip>
                <TooltipTrigger key={idx} asChild>
                    <SidebarTabs tabs={tab}
                      onClick={() => {
                        setOpen(true);
                        setTabContent(tab.content || null);
                      }}
                    />
                </TooltipTrigger>
                <TooltipContent sideOffset={5}>
                  {tab.label}
                </TooltipContent>
              </Tooltip>
            ))}
        </div>

        <span
          className="absolute top-[7px] -right-[35px] rounded-[4px] bg-hover/80 hover:bg-hover cursor-pointer! p-1 z-10"
          onMouseUp={() => {
            setOpen(!open)
            setTabContent(open ? null : tabs[1].content);
        }}>
          {open ? <IconLayoutSidebarRightExpand className="h-5 w-5 shrink-0" />
            : <IconLayoutSidebarLeftExpand className="h-5 w-5 shrink-0" />} 
        </span>
      </SidebarBody>
    </Sidebar>
  )
}



const IconNodes = ({className, props}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="1" width="8.79374" height="8.3466" rx="1.9376" className="fill-icon"/>
      <rect x="2.9688" y="15.8292" width="6.85613" height="6.409" rx="0.968802" stroke="" stroke-width="1.9376"/>
      <rect x="14.2964" y="9.71783" width="6.85613" height="6.409" rx="0.968802" stroke="" stroke-width="1.9376"/>
      <path d="M6.62061 15.9784V8.60059C6.62061 8.60059 7.29131 14.1153 14.2965 13.1465" stroke="" stroke-width="1.78856"/>
    </svg>
  )
}