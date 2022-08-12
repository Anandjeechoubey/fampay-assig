import React, { useEffect } from "react";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const Header = () => {
  const [screenFactor, setScreenFactor] = React.useState(1.2);
  useEffect(() => {
    if (screen.width > 1024) {
      setScreenFactor(2);
    } else if (screen.width > 768) {
      setScreenFactor(1.5);
    }
  }, []);

  return (
    <header className="p-4 flex justify-center">
      <Image
        priority
        src="/images/fampaylogo.svg"
        className={utilStyles.borderCircle}
        height={24 * screenFactor}
        width={90 * screenFactor}
        alt="logo"
      />
    </header>
  );
};

export default Header;
