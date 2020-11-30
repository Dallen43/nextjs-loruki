import Head from "next/head"
import Navbar from "./navbar"
import Footer from "./footer"

export const siteTitle = "Loruki-Nextjs"

export default function Layout({ children }) {
  return (<div>
    <Head>
      <meta
            name="description"
            content="Traversy Media Loruki website ported to Next.js"
          />
      <title>{siteTitle}</title>
    </Head>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
  )}