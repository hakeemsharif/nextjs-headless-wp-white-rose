import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TalentProfileSection from '../../../components/common/TalentProfileSection';
import CareerSection from '../components/CareerSection';
import CoverSection from '../../../components/common/CoverSection';
import GallerySection from '../../../components/common/GallerySection';
import NotFound from './not-found';
//import './athletepage.css'
import '@/app/styles/talentpage-slug.css'

export async function generateStaticParams() {
  const res = await fetch(`${process.env.WP_URL}/athlete?&_embed=true`);
  const data = await res.json()

  return data.map((data) => ({
    slug: data.slug
  }))
}

export default async function AthletePage({params}) {

  const res = await fetch(`${process.env.WP_URL}/athlete?slug=${params.slug}?&_embed=true`);
  
  if (!res.ok) {
    return <p>Failed to Fetch Data</p>;
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    return <NotFound />;
  }

  return (
    <section className='group-section'>
      <div className="section-header">
          <h1>Athlete</h1>
          <span className="section-border"></span>
      </div>

      <div className="athlete-details">
        <TalentProfileSection data={data}/>
        <CareerSection data={data}/>
        <CoverSection data={data}/>
        <GallerySection data={data}/>
      </div>
    </section>
  )
}
