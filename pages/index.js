import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function Home({ allPostsData }) {
  const [pageData, setPageData] = React.useState({});
  useEffect(async () => {
    try {
      const data = await fetch(
        "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17"
      );
      const json = await data.json();
      setPageData(json);
      console.log(json);
      toast.success("Success!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.error(err);
      toast.error("Error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, []);

  const handleClick = () => {
    toast.success("Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="max-w-4xl">
        <section className={utilStyles.headingMd}>
          <p>Start working here!</p>
        </section>
        <section className="flex justify-center">
          <button onClick={handleClick}>Click me</button>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
