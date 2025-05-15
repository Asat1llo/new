import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/header";


export const metadata: Metadata = {
  icons:'/icon.svg',
  title: "Planto",
  description: "Green World in this days our Earth need humans who can protect it from plactics and other thing and we should teach out children do not throw bin ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#1B2316]">
        <Header/>
        {children}
      </body>
    </html>
  );
}
