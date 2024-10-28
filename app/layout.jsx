// UI Imports start
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
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
        </body>
      </html>
    </ViewTransitions>
  );
}
