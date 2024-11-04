import React from "react";
import LatestCard from "./components/LatestCard";
import NewsCards from "@/app/components/common/NewsCards";
import getBase64 from "@/app/lib/getLocalBase64";

async function getAllNews() {
  const res = await fetch(`${process.env.WP_URL}/posts?&_embed=true`, {
    next: {
      revalidate: 60, // 60 seconds
    },
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // return res.json();
  const data = await res.json();

  // Generate blurDataURL for each item
  // ChatGPT assist
  const dataWithBlur = await Promise.all(
    data.map(async (item) => ({
      ...item,
      blurDataURL: await getBase64(item._embedded["wp:featuredmedia"][0].source_url),
    }))
  );

  return dataWithBlur;
}
export default async function NewsPage() {
  const data = await getAllNews();

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