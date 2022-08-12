import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

import useLongPress from "../hooks/useLongPress";
import HC9 from "../components/cards/HC9";
import HC3 from "../components/cards/HC3";
import Loader from "../components/Loader";
import HC5 from "../components/cards/HC5";
import HC1 from "../components/cards/HC1";
import HC6 from "../components/cards/HC6";

export default function Home({ allPostsData }) {
  const [hc1Cards, setHc1Cards] = React.useState([]);
  const [hc3Cards, setHc3Cards] = React.useState([]);
  const [hc5Cards, setHc5Cards] = React.useState([]);
  const [hc6Cards, setHc6Cards] = React.useState([]);
  const [hc9Cards, setHc9Cards] = React.useState([]);

  const [dismissList, setDismissList] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const updateData = (json) => {
    setHc1Cards([]);
    setHc3Cards([]);
    setHc5Cards([]);
    setHc6Cards([]);
    setHc9Cards([]);
    setHc1Cards(json.card_groups.filter((card) => card.design_type === "HC1"));
    setHc3Cards(json.card_groups.filter((card) => card.design_type === "HC3"));
    setHc5Cards(json.card_groups.filter((card) => card.design_type === "HC5"));
    setHc6Cards(json.card_groups.filter((card) => card.design_type === "HC6"));
    setHc9Cards(json.card_groups.filter((card) => card.design_type === "HC9"));
  };

  useEffect(async () => {
    try {
      const data = await fetch(
        "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17"
      );
      const json = await data.json();
      updateData(json);
      setLoading(false);
      console.log(json.card_groups);
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

  const onRefresh = React.useCallback(async () => {
    try {
      const data = await fetch(
        "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17"
      );
      const json = await data.json();
      updateData(json);
      console.log(json.card_groups);
      return data;
    } catch (err) {
      console.error(err);
      return err;
    }
  }, []);

  return (
    <Layout home onRefresh={onRefresh}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-4xl w-full">
          {hc3Cards.map((cardGroup, index) => (
            <section key={index} className="flex overflow-x-auto gap-4">
              {cardGroup.cards.map((card, id) =>
                dismissList.includes(card.title) ? null : (
                  <HC3
                    card={card}
                    key={id}
                    bg={card.bg_image.image_url}
                    setDismissList={setDismissList}
                  />
                )
              )}
            </section>
          ))}
          {hc6Cards.map((cardGroup, index) => (
            <section key={index} className="flex overflow-x-auto gap-4">
              {cardGroup.cards.map((card, id) => (
                <HC6 card={card} key={id} bg="white" />
              ))}
            </section>
          ))}
          {hc5Cards.map((cardGroup, index) => (
            <section key={index} className="flex overflow-x-auto gap-4">
              {cardGroup.cards.map((card, id) => (
                <HC5
                  key={id}
                  bg={card.bg_image.image_url}
                  aspectRatio={card.bg_image.aspect_ratio}
                  redirect_url={card.url}
                />
              ))}
            </section>
          ))}
          {hc9Cards.map((cardGroup, index) => (
            <section key={index} className="flex overflow-x-auto gap-4">
              {cardGroup.cards.map((card, id) => (
                <HC9
                  name={card.name}
                  key={id}
                  bg={card["bg_image"]["image_url"]}
                  aspectRatio={card["bg_image"]["aspect_ratio"]}
                  url={card["url"]}
                />
              ))}
            </section>
          ))}
          {hc1Cards.map((cardGroup, index) => (
            <section key={index} className="flex overflow-x-auto gap-4">
              {cardGroup.cards.map((card, id) => (
                <HC1
                  bg={card.bg_color || "white"}
                  url={card.url}
                  key={id}
                  icon={card.icon.image_url}
                  formatted_title={card.formatted_title || card.title}
                />
              ))}
            </section>
          ))}
        </div>
      )}
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
