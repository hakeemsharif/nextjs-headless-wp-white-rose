import React from 'react'
import Image from 'next/image'
// import Video from 'next-video'
// import HeroBG2 from '@/videos/Hero.mp4'
import BackgroundVideo from 'next-video/background-video';
import './hero.css'

// assets
import HeroBG from '../../../../assets/images/hero.webp'
// assets

export default function Hero() {
  return (
    //<section>
        <div className="hero-section">
            <div className="filter"><h1>Beyond Representation, We Create Icons</h1></div>
            <Image 
                src={HeroBG}
                alt='Logo'
                width={2240}
                quality={100}
                priority
            />
        </div>
    //</section>
  )
}
