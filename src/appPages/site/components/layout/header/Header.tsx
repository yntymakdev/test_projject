"use client";
import React, { useState } from "react";
import s from "./Header.module.scss";
import Image from "next/image";
import image from "./image/IMAGE (2).png";
import svgHeader from "./image/IMAGE.svg";
import { AlignJustify, ShoppingCart, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.minContainerHeader}>
          <div className={s.logoWrapper}>
            <Image alt="image" src={svgHeader} />
          </div>
          <div className={s.paraHeader}>
            <div className={s.para}>
              <p>Courses</p>
            </div>
            <div className={s.para}>
              <p>Free Workshops</p>
            </div>
            <div className={s.para}>
              <p>Blog</p>
            </div>
            <div className={s.para}>
              <p>About</p>
            </div>
            <div className={s.para}>
              <p>Contact</p>
            </div>
          </div>
          <div className={s.iconHeader}>
            <div className={s.icon}>
              <ShoppingCart color="#ffffff" />
            </div>
            <div className={s.iconMenu} onClick={toggleMenu}>
              <AlignJustify color="#ffffff" />
            </div>
          </div>
        </div>
      </div>

      <div className={`${s.sideMenu} ${isMenuOpen ? s.open : ""}`}>
        <div className={s.sideMenuContent}>
          <br />
          <br />
          <br />
          <div className={s.closeButton} onClick={toggleMenu}>
            <br />
            <br />
            <X color="#ffffff" />
          </div>
          <div className={s.paraMenu}>
            <p>Courses</p>
          </div>
          <div className={s.paraMenu}>
            <p>Free Workshops</p>
          </div>
          <div className={s.paraMenu}>
            <p>Blog</p>
          </div>
          <div className={s.paraMenu}>
            <p>About</p>
          </div>
          <div className={s.paraMenu}>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
