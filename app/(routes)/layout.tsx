import SiteNavbar from "@/components/custom/site/navbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex flex-col min-h-screen">
      <SiteNavbar />
        {children}
      </div>
    </main>
  );
}
