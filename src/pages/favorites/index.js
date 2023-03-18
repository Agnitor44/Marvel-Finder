import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import FavoritesContainer from "@/containers/FavoritesContainer";
import React from "react";

export default function Favorites() {
  return (
    <Layout>
      <Seo title={"Favorites"} />
      <FavoritesContainer />
    </Layout>
  );
}
