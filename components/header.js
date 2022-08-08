import React from "react";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const Header = () => {
  return (
    <header className="p-4 flex justify-center">
      <Image
        priority
        src="/images/fampaylogo.svg"
        className={utilStyles.borderCircle}
        height={24}
        width={90}
        alt="logo"
      />
    </header>
  );
};

export default Header;
