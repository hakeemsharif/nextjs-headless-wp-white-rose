// UI Imports start
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import BannerMessage from "./components/common/BannerMessage";
// UI Imports end

import { Kanit } from 'next/font/google'
import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/responsive.css"
import { ViewTransitions } from "next-view-transitions";
import NextTopLoader from "nextjs-toploader";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const felgine = localFont({
  src: "./fonts/Felgine.otf",
  variable: "--font-felgine",
})

const kanit = Kanit({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  // Add the weights you need
  subsets: ["latin"],
  variable: '--font-kanit',
});

export const metadata = {
  title: "White Rose | Talent Agency",
  description: "A talent agency website concept built with Next.js and fetches data from WordPress via REST API",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
  },
  appleWebApp: {
    title: 'White Rose',
    statusBarStyle: 'default'
  },
  other: {
    "generator": "WordPress", // This adds a WordPress generator meta tag
  },
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${felgine.variable} ${kanit.variable}`}>
        <body >
          <NextTopLoader color="#FFFFFF" showSpinner={false} />
          <Navbar />
          {children}
          <Footer />
          <BannerMessage />   
        </body>
      </html>
    </ViewTransitions>
  );
}
