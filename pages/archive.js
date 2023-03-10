
import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import Image from "next/image";
import { myLoader } from "@utils/all";
import Tshirt from '../public/img/probando/feed 3.jpg'

export default function Post(props) {

  //console.log(posts);

  return (
    <>

        <Layout >
          <NextSeo

          />
          <Container>
            <h1 className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              Archive
            </h1>
            <div className="text-center">
              <p className="mt-2 text-lg">
                See all posts we have ever written.
              </p>
            </div>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            <Image
                        src={Tshirt}
                        alt="logo"
                        loader={myLoader}
                      />
                     
            </div>
          </Container>
        </Layout>

    </>
  );
}

