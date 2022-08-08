import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import PullToRefresh from "react-simple-pull-to-refresh";

import Header from "./header";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    console.log("onRefresh");
    setRefreshing(true);
    // setTimeout(() => {
    //   setRefreshing(false);
    // }, 1000);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("foo");
      }, 1000);
    });
  }, []);

  return (
    <PullToRefresh onRefresh={onRefresh} pullingContent="">
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <Header />

        <main className="bg-background-primary-light min-h-screen p-4 flex justify-center rounded-2xl">
          {children}
        </main>
      </div>
    </PullToRefresh>
  );
}
