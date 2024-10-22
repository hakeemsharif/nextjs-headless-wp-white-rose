import React from 'react'
import Filter from './components/Filter'
import Image from 'next/image'
// import Link from 'next/link'
import { Link } from 'next-view-transitions'
//import './sportspage.css'
import '@/app/styles/talentcards.css'
import TalentCards from '@/app/components/common/TalentCards'
import athlete1 from "@/app/assets/images/athlete1.png"
import athlete2 from "@/app/assets/images/athlete2.jpg"
import athlete3 from "@/app/assets/images/athlete3.jpg"
import athlete4 from "@/app/assets/images/athlete4.jpg"
import athlete5 from "@/app/assets/images/athlete5.jpg"
import athlete6 from "@/app/assets/images/athlete6.png"
import athlete7 from "@/app/assets/images/athlete7.jpg"
import athlete8 from "@/app/assets/images/athlete8.png"

export default async function Sports() {

  const res = await fetch(`${process.env.WP_URL}/athlete?&_embed=true`);
  const data = await res.json();
    
  // const athletes = [
  //   { image: athlete1, name: "Caitlin Clark" },
  //   { image: athlete2, name: "Charles Leclerc" },
  //   { image: athlete3, name: "Daniel Ricciardo" },
  //   { image: athlete4, name: "Iga Świątek" },
  //   { image: athlete5, name: "Jannik Sinner" },
  //   { image: athlete6, name: "Lonzo Ball" },
  //   { image: athlete7, name: "Max Verstappen" },
  //   { image: athlete8, name: "Roger Federer" },
  // ]

  return (
    <section className='group-section'>
      <title>White Rose | Athletes</title>
      <div className="section-header">
          <h1>Athletes</h1>
          <span className="section-border"></span>
      </div>
      <TalentCards category={'sports'} data={data} />

      {/* <div className="athlete-card-list">
        {data
        .sort((a, b) => a.slug.localeCompare(b.slug))
        .map((athlete, index) => (
          <Link href={`sports/${athlete.slug}`} key={index}>
          <div  className="athlete-card">
            <div className="card-filter">
              <h1>{athlete.acf.fullname}</h1>
            </div>
              <Image
                src={athlete._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.full.source_url}
                alt={athlete.acf.fullname}
                width={500}
                height={500}
                quality={100}
                priority
              />
          </div>
           </Link>
          
        ))}
        
      </div> */}

      {/* <div className="athlete-card-list">
        <div className="athlete-card">
        <div className="card-filter"><h1>Caitlin Clark</h1></div>
            <Image 
                src={athlete1}
                alt='Logo'
                width={1000}
                quality={100}
              />
        </div>

        <div className="athlete-card">
            <Image 
                src={athlete2}
                alt='Logo'
                width={1000}
                quality={100}
              />
        </div>

        <div className="athlete-card">
            <Image 
                src={athlete3}
                alt='Logo'
                width={1000}
                quality={100}
              />
        </div>

        <div className="athlete-card">
            <Image 
                src={athlete4}
                alt='Logo'
                width={1000}
                quality={100}
              />
        </div>

        <div className="athlete-card">
            <Image 
                src={athlete5}
                alt='Logo'
                width={1000}
                quality={100}
              />
        </div>

        <div className="athlete-card">
            <Image 
                src={athlete6}
                alt='Logo'
                width={1000}
                quality={100}
              />
        </div>

        <div className="athlete-card">
            <Image 
                src={athlete7}
                alt='Logo'
                width={1000}
                quality={100}
              />
        </div>

        <div className="athlete-card">
            <Image 
                src={athlete8}
                alt='Logo'
                width={1000}
                quality={100}
              />
        </div>
      </div> */}
    </section>
  )
}
