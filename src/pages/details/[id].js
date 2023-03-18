import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import ComicDetailsContainer from "@/containers/ComicDetailsContainer";
import { useRouter } from "next/router";
import React from "react";

export default function Details() {
  const router = useRouter();
  const title = router.query.title;

  return (
    <Layout>
      <Seo title={title} />
      <ComicDetailsContainer />
    </Layout>
  );
}
