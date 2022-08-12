import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { getFormattedText } from "../../utils/formatText";
import useLongPress from "../../hooks/useLongPress";

const ActionButton = ({ text, action, iconName }) => {
  return (
    <button
      onClick={action}
      className="bg-background-primary-light flex flex-col items-center text-xs px-2 py-4 rounded-lg"
    >
      <Image
        priority
        src={`/images/${iconName}`}
        width={24}
        height={24}
        alt={text}
      />
      <span>{text}</span>
    </button>
  );
};

const HC3 = ({ card, bg, setDismissList }) => {
  const router = useRouter();
  const [expanded, setExpanded] = React.useState(false);

  const [hidden, setHidden] = React.useState(false);

  const onLongPress = () => {
    console.log("longpress is triggered");
    setExpanded((e) => !e);
  };

  const onClick = () => {
    console.log("click is triggered");
    // console.log(e);
    setExpanded(false);
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 300,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  if (hidden) {
    return null;
  }
  return (
    <div className="flex rounded-lg w-full h-80 overflow-hidden relative">
      <div className="flex flex-col w-full justify-around items-start bg-white p-4">
        <ActionButton
          text="remind later"
          iconName="bell_icon.svg"
          action={() => setHidden(true)}
        />
        <ActionButton
          text="dismiss now"
          iconName="dismiss_icon.svg"
          action={() => setDismissList((list) => [...list, card.title])}
        />
      </div>
      <div
        className={`flex flex-col z-10 text-white justify-center items-start absolute w-full h-full rounded-lg transition duration-100 p-6 ${
          expanded ? "translate-x-36" : ""
        }`}
        style={{
          background: bg ? `url(${bg})` : "#454AA6",
          backgroundSize: "cover",
        }}
        {...longPressEvent}
      >
        <h3 className="text-lg font-semibold">
          {getFormattedText(
            card.formatted_title.text || card.title.text,
            card.formatted_title.entities
          )}
        </h3>
        <span className="text-sm">
          {getFormattedText(
            card.formatted_description.text || card.description.text,
            card.formatted_description.entities
          )}
        </span>
      </div>
      <a
        href={card.cta[0].url}
        className={`flex z-20 bottom-4 left-4 absolute transition duration-100 ${
          expanded ? "translate-x-36" : ""
        }`}
      >
        <button
          style={{
            background: card.cta[0].bg_color,
            color: card.cta[0].text_color,
          }}
          className=" px-8 py-2 rounded-lg text-sm"
        >
          {card.cta[0].text}
        </button>
      </a>
      {/* <img src={bg} style={{ visibility: "hidden", opacity: 0, zIndex: 100 }} /> */}
    </div>
  );
};

export default HC3;
