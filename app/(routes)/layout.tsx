import SiteFooter from "@/components/custom/site/footer";
import SiteNavbar from "@/components/custom/site/navbar";

export default function AppLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
        <SiteNavbar />
        <div className="flex flex-col min-h-screen max-w-4xl border-l border-r mx-auto">
        {children}
        <SiteFooter />
        </div>
      </main>
    );
  }
  