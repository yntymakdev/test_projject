// "use client";
// import { FC, ReactNode, useEffect, useState } from "react";
// import scss from "./LayoutSite.module.scss";
// import PreLoader from "@/ui/preLoader/PreLoader";
// import Header from "./header/Header";
// import Footer from "./footer/Footer";

// interface LayoutSiteProps {
//   children: ReactNode;
// }

// const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
//   const [isPreLoader, setIsPreloader] = useState(true);

//   return (
//     <>
//       {isPreLoader ? (
//         <>
//           <PreLoader />
//         </>
//       ) : (
//         <>
//           <div className={scss.LayoutSite}>
//             <Header />
//             <main>{children}</main>
//             <Footer />
//           </div>
//         </>
//       )}
//     </>
//   );
// };
// export default LayoutSite;

import React, { ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import scss from "./LayoutSite.module.scss";
import Hero from "./Hero/Hero";
const LayoutSite = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className={scss.LayoutSite}>
        <Hero />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutSite;
