import "@/app/styles/talentcards.css";
import TalentCards from "@/app/components/common/TalentCards";
export default async function Sports() {
  const res = await fetch(`${process.env.WP_URL}/athlete?&_embed=true`, {
    next: {
      revalidate: 24 * 60 * 60, // 24 hours × 60 minutes × 60 seconds
    },
  });
  const data = await res.json();

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
