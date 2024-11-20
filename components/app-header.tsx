import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppHeader() {
  return (
    <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                Project Management & Task Tracking
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
    // <header className="flex h-12 border-b shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
    //   <div className="flex items-center gap-2 px-4">
    //     <SidebarTrigger className="-ml-1" />
    //     <Separator orientation="vertical" className="mr-2 h-4" />
    //     <Breadcrumb>
    //       <BreadcrumbList>
    //         <BreadcrumbItem className="hidden md:block">
    //           <BreadcrumbLink href="#">
    //             Building Your Application
    //           </BreadcrumbLink>
    //         </BreadcrumbItem>
    //         <BreadcrumbSeparator className="hidden md:block" />
    //         <BreadcrumbItem>
    //           <BreadcrumbPage>Data Fetching</BreadcrumbPage>
    //         </BreadcrumbItem>
    //       </BreadcrumbList>
    //     </Breadcrumb>
    //   </div>
    // </header>
  );
}
