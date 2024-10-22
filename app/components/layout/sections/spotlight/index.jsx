import React from 'react'
import Image from 'next/image'
import './talent.css'
import TalentSpotlight from '../../../../assets/images/spotlight.webp'

import iglogo from '../../../../assets/icons/ig.png'
import xlogo from '../../../../assets/icons/x.png'
import ytlogo from '../../../../assets/icons/yt.png'
import spotifylogo from '../../../../assets/icons/spotify.png'
import Link from 'next/link'


async function getFeatured() {
    const res = await fetch(`${process.env.WP_URL}/featured?acf_format=standard`);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    
    return res.json()
}
export default async function Spotlight() {

    const data = await getFeatured()
    const acf = data[0]

    const logos = [
        { src: iglogo, alt: 'Instagram Logo' },
        { src: xlogo, alt: 'X Logo' },
        { src: ytlogo, alt: 'YouTube Logo' },
        { src: spotifylogo, alt: 'Spotify Logo', className: 'MenuIcon' }
    ];
    
  return (
    <section>
        <div className="spotlight-section">
            <div className="section-header">
                <h1>Talent Spotlight</h1>
                <span className="section-border"></span>
            </div>

            {data.slice(0, 1).map((featured) => (
   
                <div className="main-spotlight" key={featured.id}>
                <div className="spotlight-content">
                    <div className="left-content">
                        <span>Featured</span>
                        <h1>{featured.acf.page_link_second.post_title}</h1>
                        <span>
                        <Link href={`/${(() => {
                        switch (featured.acf.page_link_second.post_type) {
                            case 'athlete':
                                return 'sports';
                            case 'model':
                                return 'fashion';
                            default:
                                return 'entertainment';
                        }
                        })()}/${featured.acf.page_link_second.post_name}`}>
                            Learn More
                        </Link>
                        </span>
                    </div>
                    {/* <div className="social-links">
                        <ul>
                            {logos.map((logo, index) => (
                                <li key={index}>
                                    <Image 
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={350}
                                        quality={100}
                                        priority
                                        className={logo.className}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div> */}
                </div>
                <div className="image-container">
                    <Image 
                            //src={TalentSpotlight}
                            src={featured.acf.spotlight_image}
                            alt="UYRK"
                            width={2000}
                            height={2000}
                            quality={100}
                        />
                </div>

                </div>
            ))}

        </div>
    </section>
  )
}
