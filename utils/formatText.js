import React from "react";

export const getFormattedText = (text, entities = []) => {
  return text.split("{}").map((part, index) => {
    if (index > entities.length - 1) return <span key={index}>{part}</span>;
    return (
      <span key={index}>
        {part}
        <span style={{ color: entities[index].color }}>
          {entities[index].text}
        </span>
      </span>
    );
  });
};
