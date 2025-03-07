import "@/app/styles/talentcards.css";
import TalentCards from "@/app/components/common/TalentCards";
import getBase64 from "@/app/lib/getLocalBase64";

async function getAthlete() {
  const res = await fetch(`${process.env.WP_URL}/athlete?&_embed=true`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const dataWithBlur = await Promise.all(
    data.map(async (item) => ({
      ...item,
      blurDataURL: await getBase64(
        item._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
          .source_url
      ),
    }))
  );

  return dataWithBlur;
}
export default async function Sports() {
  const data = await getAthlete();
  return (
    <section className="group-section">
      <title>White Rose | Athletes</title>
      <div className="section-header">
        <h1>Athletes</h1>
        <span className="section-border"></span>
      </div>
      <TalentCards category={"sports"} data={data} />
    </section>
  );
}