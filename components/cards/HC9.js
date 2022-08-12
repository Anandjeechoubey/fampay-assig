import { useRouter } from "next/router";
import React from "react";

const HC9 = ({ bg, aspectRatio, url, name }) => {
  const router = useRouter();
  return (
    <img
      src={bg}
      width={aspectRatio * 144}
      height={144}
      alt={name}
      onClick={() => router.push(url)}
    />
  );
};

export default HC9;
