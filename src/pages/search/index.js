import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import ComicsByQueryContainer from "@/containers/ComicsByQueryContainer";
import { useRouter } from "next/router";
import React from "react";

export default function Query() {
  const router = useRouter();
  const query = router.query.query;
  return (
    <Layout>
      <Seo title={query} />
      <ComicsByQueryContainer />
    </Layout>
  );
}
