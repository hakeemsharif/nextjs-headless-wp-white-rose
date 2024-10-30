import React from "react";
import LatestCard from "./components/LatestCard";
import NewsCards from "@/app/components/common/NewsCards";

export default async function NewsPage() {
  const res = await fetch(`${process.env.WP_URL}/posts?&_embed=true`, {
    next: {
      revalidate: 60, // 60 seconds
    },
  });
  const data = await res.json();

  return (
    <section className="group-section">
      <title>White Rose | News</title>

      <div className="section-header">
        <h1>Latest</h1>
        <span className="section-border"></span>
      </div>

      <LatestCard data={data} />
      <NewsCards data={data} slice={"0,4"} />
    </section>
  );
}