import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontMono } from "@/config/fonts";
import Nav from "@/components/nav";
import HeroBanner from "@/components/herobanner";
import ProvidersProgress from "@/components/ProgressBarProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <ClerkProvider>
      <html suppressHydrationWarning lang="en">
        <head />
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontMono.className
          )}
        >
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <div className="relative flex flex-col w-full">
              <Nav />
              <HeroBanner />
              <div className="w-full max-w-5xl mx-auto">
                <ProvidersProgress>{children}</ProvidersProgress>
              </div>
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
   </ClerkProvider>
  );
}
