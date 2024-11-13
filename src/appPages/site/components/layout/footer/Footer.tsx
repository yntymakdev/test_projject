import { FC } from "react";
import s from "./Footer.module.scss";
import Image from "next/image";
import image from "./image/IMAGE.svg";
const Footer: FC = () => {
  return (
    <>
      <div className={s.footer}>
        <div className="container">
          <div className={s.block}>
            <div className={s.footerMain}>
              <Image alt="image" src={image} />
              <br />
              <br />
              <br />
              <br />
              <div className={s.stolb}>
                <p>learning Platform</p>
                <p>Home</p>
                <p>Courses</p>
                <p>Free Workshops</p>
                <p>Blog</p>
                <p>About</p>
                <p>Contact</p>
              </div>
            </div>

            <div className={s.stolb_two}>
              <p>Template</p>
              <p>Instructions</p>
              <p>Style Guide</p>
              <p>Licenses</p>
              <p>Changelog</p>
            </div>
            <div className={s.stolb_three}>
              <p>Follow skillz</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
