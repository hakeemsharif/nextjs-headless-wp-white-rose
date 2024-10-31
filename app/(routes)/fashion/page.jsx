// COMPONENTS
import getBase64 from "@/app/lib/getLocalBase64";
import TalentCards from "@/app/components/common/TalentCards";
// COMPONENTS

// STYLE
import "@/app/styles/talentcards.css";
// STYLE

export default async function Fashion() {
  const res = await fetch(`${process.env.WP_URL}/model?&_embed=true`, {
    next: {
      revalidate: 24 * 60 * 60, // 24 hours × 60 minutes × 60 seconds
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  
  for (const post of data) {
    const imageUrl = post._embedded["wp:featuredmedia"][0].source_url;
    post.blurDataURL = await getBase64(imageUrl);
  }

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