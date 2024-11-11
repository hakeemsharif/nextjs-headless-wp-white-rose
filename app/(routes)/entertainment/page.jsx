import React from "react";
import getBase64 from "@/app/lib/getLocalBase64";
import TalentCards from "@/app/components/common/TalentCards";
import "@/app/styles/talentcards.css";

async function getArtist() {
  const res = await fetch(`${process.env.WP_URL}/artist?&_embed=true`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const dataWithBlur = await Promise.all(
    data.map(async (item) => ({
      ...item,
      blurDataURL: await getBase64(item._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full.source_url),
    }))
  );

  return dataWithBlur;

}

export default async function Entertainment() {

  const data = await getArtist()

  return (
    <section className="group-section">
      <title>White Rose | Artists</title>

      <div className="section-header">
        <h1>Artists</h1>
        <span className="section-border"></span>
      </div>

      <TalentCards category={"entertainment"} data={data} />
    </section>
  );
}