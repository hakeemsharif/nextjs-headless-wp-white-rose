// COMPONENTS
import TalentCards from '@/app/components/common/TalentCards'
// COMPONENTS

// STYLE
import '@/app/styles/talentcards.css'
// STYLE

export default async function Fashion() {
    
    const res = await fetch(`${process.env.WP_URL}/model?&_embed=true`, {
      next: {
        revalidate: 24 * 60 * 60 // 24 hours × 60 minutes × 60 seconds
      }
    });
    const data = await res.json();

  return (
    <section className='group-section'>

    <title>White Rose | Models</title>

    <div className="section-header">
        <h1>Models</h1>
        <span className="section-border"></span>
    </div>

    <TalentCards category={'fashion'} data={data} />

  </section>
  )
}
