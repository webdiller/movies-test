import React from "react";
import Image from "next/image";
import TMDBlogo from "@/base/tmdb-logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__logo-wrapper">
          <Image
            objectFit="contain"
            alt="tmdb logo"
            quality={50}
            layout="fill"
            src={TMDBlogo}
            className="footer__img"
          />
        </div>
      </div>
    </footer>
  );
}
