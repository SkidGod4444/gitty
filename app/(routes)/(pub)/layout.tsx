import SiteFooter from "@/components/custom/site/footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex flex-col border-l border-r min-h-screen max-w-4xl mx-auto">
        {children}
        <SiteFooter />
      </div>
    </main>
  );
}
