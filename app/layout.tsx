import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박종권 포트폴리오",
  description: "화면에서 시작해 서버와 AI까지 만드는 풀스택 개발자, 박종권의 포트폴리오",
  openGraph: {
    images: "/images/open-graph.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=IBM+Plex+Sans+KR:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
