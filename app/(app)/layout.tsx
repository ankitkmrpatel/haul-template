import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({
  children,
  innetComponent,
  subnetComponent,
}: Readonly<{
  children: React.ReactNode;
  innetComponent?: React.ReactNode;
  subnetComponent?: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      {/* Link with Page Router */}
      <AppSidebar />
      {innetComponent && innetComponent}
      <SidebarInset>
        {/* Page Header */}
        <AppHeader />
        {children}
      </SidebarInset>
      {subnetComponent && subnetComponent}
    </SidebarProvider>
  );
}
