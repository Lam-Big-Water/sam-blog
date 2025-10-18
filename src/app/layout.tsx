import type { Metadata } from "next";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import clsx from "clsx";

import "./styles.css";

import { BLOG_TITLE, LIGHT_TOKENS, DARK_TOKENS } from "@/constants";

import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import RespectMotionPreferences from "@/components/RespectMotionPreferences/";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});

const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme: "light" | "dark" = "light";
  const themeTokens = theme === "light" ? LIGHT_TOKENS : DARK_TOKENS;
  return (
    <RespectMotionPreferences>
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        data-color-theme={theme}
        style={themeTokens as React.CSSProperties}
      >
        <body>
          <Header initialTheme={theme} />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </RespectMotionPreferences>
  );
}
