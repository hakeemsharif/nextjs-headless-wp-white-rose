import React from 'react'

// COMPONENTS
import TalentProfileSection from '@/app/components/common/TalentProfileSection';
import CoverSection from '@/app/components/common/CoverSection';
import GallerySection from '@/app/components/common/GallerySection';
import NotFound from './not-found';
// COMPONENTS

// STYLE
import '@/app/styles/talentpage-slug.css'
// STYLE


export async function generateStaticParams() {
  const res = await fetch(`${process.env.WP_URL}/artist?&_embed=true`);
  const data = await res.json()

  return data.map((data) => ({
    slug: data.slug
  }))
}

export default async function ArtistPage({params}) {

  // const res = await fetch(`http://white-rose.local/wp-json/wp/v2/artist?slug=${params.slug}?&_embed=true`);
  // const data = await res.json();
   const res = await fetch(`${process.env.WP_URL}/artist?slug=${params.slug}?&_embed=true`);

  if (!res.ok) {
    return <p>Failed to Fetch Data</p>;
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    return <NotFound />;
  }

  return (
    <section className='group-section'>

        {/* <title>White Rose | {data[0].acf.fullname}</title> */}

        <div className="section-header">
            <h1>Artist</h1>
            <span className="section-border"></span>
        </div>

        <div className="artist-details">
            <TalentProfileSection data={data}/>
            {/* <CareerSection data={data}/> */}
            <CoverSection data={data}/>
            <GallerySection data={data}/>
        </div>
    </section>
  )
}
