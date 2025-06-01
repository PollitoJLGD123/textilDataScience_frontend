
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/layouts/dashboard/header"
import Sidebar from "@/components/layouts/dashboard/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
          <div className="flex min-h-screen w-full">
            <Sidebar />
            <SidebarInset className="flex flex-col flex-1 min-w-0 overflow-hidden">
              <div className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <Header />
              </div>
              <main className="flex-1 overflow-auto">
                {children}
                <Toaster richColors />
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
    </>
  );
}
