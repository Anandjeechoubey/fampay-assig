import { useRouter } from "next/router";
import React from "react";

import { getFormattedText } from "../../utils/formatText";

const HC6 = ({ bg, card }) => {
  const router = useRouter();
  return (
    <a
      href={card.url}
      className="flex items-center rounded-lg mt-4 w-full p-4 gap-4"
      style={{ background: bg }}
      onClick={() => router.push(card.url)}
    >
      <img src={card.icon.image_url} width={30} height={30} alt="contact" />
      <div className="flex items-center grow">
        <span className="text-xs font-bold">
          {getFormattedText(
            card.formatted_title.text || card.title.text,
            card.formatted_title.entities
          )}
        </span>
      </div>
      <img
        src="/images/arrow_right.svg"
        className="float-right"
        width={10}
        height={16}
        alt="contact"
      />
    </a>
  );
};

export default HC6;
