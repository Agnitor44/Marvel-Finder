import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import MainContainer from "@/containers/MainContainer";
import Head from "next/head";

export default function Home({ data }) {
  return (
    <Layout>
      <Seo />
      <MainContainer />
    </Layout>
  );
}
