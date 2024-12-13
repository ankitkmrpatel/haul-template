import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { CalenderSidebar } from "@/components/calender-sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      {/* Link with Page Router */}
      <AppSidebar />
      <SidebarInset>
        {/* Page Header */}
        <AppHeader />
        {children}
      </SidebarInset>
      <CalenderSidebar />
    </SidebarProvider>
  );
}
