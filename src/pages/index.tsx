import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import StickyCTA from "../components/StickyCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>AblakUnio - Nyílászárók szakértője | Műanyag és alumínium ablak, ajtó</title>
        <meta
          name="description"
          content="Műanyag és alumínium ablakok, ajtók, redőnyök, szúnyoghálók beépítéssel. Kérjen ingyenes árajánlatot Magyarország egyik legsikeresebb ablakos cégétől!"
        />
        <link rel="canonical" href="https://ablakunio.com" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Testimonials />
        <ContactForm />
      </main>
      <StickyCTA />
      <Footer />
    </>
  );
}