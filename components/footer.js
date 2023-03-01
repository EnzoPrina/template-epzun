import Container from "@components/container";
import ThemeSwitch from "@components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@utils/all";
import VercelLogo from "../public/img/curvo.png";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 text-sm text-center text-gray-400 dark:text-gray-600">
        Made by{" "}
        {/*  // ** 🙏  Can I ask you a favor? 🙏 **
            // Please do not remove the below link.
           // It helps us to grow & continue our work. Thank you.
          // OR contact hello@web3templates.com for commercial license.  */}
        <a
          href="https://www.linkedin.com/in/enzo-prina-dev/"
          rel="noopener"
          target="_blank">
          Enzo Prina
        </a>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="mt-5">
          <a
            href="https://www.linkedin.com/in/enzo-prina-dev/"
            target="_blank"
            rel="noopener"
            className="relative block w-44">
            <Image
              src={VercelLogo}
              layout="fixed"
              loader={myLoader}
              alt="Powered by Vercel"
              width="100"
              height="32"
            />
          </a>
        </div>
        <ThemeSwitch />
      </div>
    </Container>
  );
}
