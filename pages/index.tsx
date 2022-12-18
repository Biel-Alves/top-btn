import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import { AboutPage, ContactPage, HomePage, ProjectsPage, Header, TopButton } from "../components";

const Home: NextPage = () => {
  const scrollRef: any = useRef();

  return (
    <div ref={scrollRef} className="wrapper">
      <Head>
        <title>TOP BTN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header forwardedRef={scrollRef} />

      <HomePage forwardedRef={scrollRef} />

      <AboutPage />

      <ProjectsPage />

      <ContactPage />

      <TopButton forwardedRef={scrollRef} />
    </div>
  );
};

export default Home;
