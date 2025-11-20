import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme.provider";
import { Analytics } from "@vercel/analytics/next";

const fontLora = localFont({
  src: [
    {
      path: "../fonts/Lora-Bold.ttf",
      weight: "400",
      style: "bold",
    },
    {
      path: "../fonts/Lora-SemiBold.ttf",
      weight: "400",
      style: "semibold",
    },
    {
      path: "../fonts/Lora-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Lora-SemiBoldItalic.ttf",
      weight: "400",
      style: "semibold-italic",
    },
    {
      path: "../fonts/Lora-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-lora",
  display: "swap",
  preload: true,
});

const fontGeist = Geist({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-geist",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Gitty - Share Private Repos, Securely & Effortlessly",
  description:
    "Give access to your private repositories—no need to make them public. With Gitty, you control who can view your code. Share securely with collaborators, recruiters, or friends and never compromise on privacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontGeist.variable} ${fontLora.variable} antialiased bg-[#FAFAFA]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics mode="production" />
      </body>
    </html>
  );
}
