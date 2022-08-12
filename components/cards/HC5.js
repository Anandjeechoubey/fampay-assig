import { useRouter } from "next/router";
import React from "react";

const HC5 = ({ bg, redirect_url }) => {
  const router = useRouter();
  return (
    // <a href={redirect_url}>
    //   <div
    //     className="flex rounded-lg w-full"
    //     style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    //   >
    //   </div>
    // </a>
    <img
      onClick={() => router.push(redirect_url)}
      src={bg}
      className="flex rounded-lg w-full my-4"
    />
  );
};

export default HC5;
