import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATCo | Everyday Essentials",
  description:
    "ATCo by Atharva Trading Co. offers thoughtfully selected essentials across home, kitchen, cleaning, jewellery and rainwear.",
  metadataBase: new URL("https://atharvatradingco.com"),
  openGraph: {
    title: "ATCo | Everyday Essentials",
    description: "Useful products. Chosen with care.",
    url: "https://atharvatradingco.com",
    siteName: "ATCo",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
