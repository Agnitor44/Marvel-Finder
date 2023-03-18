import Head from "next/head";
import React from "react";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{`Marvel Finder ${title ? "-" : ""} ${title || ""}`}</title>
    </Head>
  );
}
