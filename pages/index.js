

import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";


export default function Post(props) {


  const router = useRouter();

  return (
    <>
     
        <Layout>

          <Container>
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">

            </div>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">

            </div>
          </Container>
        </Layout>
      
    </>
  );
}
