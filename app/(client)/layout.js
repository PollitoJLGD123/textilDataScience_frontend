import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Innovation Data Science Textil",
  description: "Help to the textile industry",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
 
    <>
       <Head>
        {/* Preconnect a Google Fonts para mejorar la conexión */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" 
          as="style" 
        />
      </Head>
        <Header/>
        {children}
        <Footer/>
    </>

  );
}
