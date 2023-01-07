import '../styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
