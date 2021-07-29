import { Landing } from "@components/Landing";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Landing />
      </main>

      <footer></footer>
    </div>
  );
}
