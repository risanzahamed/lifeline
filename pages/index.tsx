import Companies from "@/Components/Companies/Companies";
import Testimonials from "@/Components/Testimonials/Testimonials";
import WhatWeDo from "@/Components/WhatWeDo/WhatWeDo";
import { Inter } from "next/font/google";
import Header from "@/Components/Header/Header";
import Banner from "@/Components/Banner/Banner";
import Counter from "@/Components/Counter/Counter";
import Footer from "@/Components/Footer/Footer";
import MoneyGoes from "@/Components/MoneyGoes/MoneyGoes";
import Causes from "@/Components/Causes/Causes";
import Head from "next/head";
import BlogSection from "@/Components/BlogSection/BlogSection";
import AboutSection from "@/Components/AboutSection/AboutSection";
import Newsletter from "@/Components/Newsletter/Newsletter";
import Gallary from "@/Components/Gallary/Gallary";
import JoinVulenteers from "@/Components/JoinVulenteers/JoinVulenteers";
import OurVulenteers from "@/Components/OurVulenteers/OurVulenteers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Head>
        <title>Lifeline</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <Header></Header>
      <Banner></Banner>
      <div className=" max-w-[1440px] mx-auto">
        <AboutSection></AboutSection>
        <Causes></Causes>
        <MoneyGoes></MoneyGoes>
        <WhatWeDo />
        <Counter></Counter>
        <Gallary></Gallary>
        <JoinVulenteers></JoinVulenteers>
        <OurVulenteers></OurVulenteers>
        <Companies />
        <BlogSection></BlogSection>
        <Testimonials />
        <Newsletter></Newsletter>
      </div>
      <Footer></Footer>
    </main>
  );
}
