import React from 'react';
import Head from "next/head";
import Header from "./header";

type Props = {
  title?: string,
  children: JSX.Element,
};

const Index: React.FC<Props> = ({title = "blog", children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="">
        <Header/>
        <main className="container mx-auto max-w-xl pt-8 min-h-screen">
          {children}
        </main>
      </div>
    </>
  );
};

export default Index