import React from "react";

import { getFormattedText } from "../../utils/formatText";

const HC1 = ({ bg, url, icon, formatted_title }) => {
  return (
    <a
      href={url}
      className="inline-flex rounded-lg gap-4 p-4 pr-12 mt-4 w-full"
      style={{ background: bg }}
    >
      <img src={icon} width={30} height={30} alt="icon" />{" "}
      <span className=" text-lg">
        {getFormattedText(formatted_title.text, formatted_title.entities)}
      </span>
    </a>
  );
};

export default HC1;
