import "@/app/styles/talentcards.css";
import TalentCards from "@/app/components/common/TalentCards";
import getBase64 from "@/app/lib/getLocalBase64";

export default async function Sports() {
  const res = await fetch(`${process.env.WP_URL}/athlete?&_embed=true`, {
    next: {
      revalidate: 24 * 60 * 60, // 24 hours × 60 minutes × 60 seconds
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  
  // for (const post of data) {
  //   const imageUrl = post._embedded["wp:featuredmedia"][0].source_url;
  //   post.blurDataURL = await getBase64(imageUrl);
  // }
  
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
