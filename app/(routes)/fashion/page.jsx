import getBase64 from "@/app/lib/getLocalBase64";
import TalentCards from "@/app/components/common/TalentCards";
import "@/app/styles/talentcards.css";

async function getModel() {
  const res = await fetch(`${process.env.WP_URL}/model?&_embed=true`, {
    next: {
      revalidate: 24 * 60 * 60, // 24 hours × 60 minutes × 60 seconds
    },
  });

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
export default async function Fashion() {

  const data = await getModel();

  return (
    <section className="group-section">
      <title>White Rose | Models</title>

      <div className="section-header">
        <h1>Models</h1>
        <span className="section-border"></span>
      </div>

      <TalentCards category={"fashion"} data={data} />
    </section>
  );
}