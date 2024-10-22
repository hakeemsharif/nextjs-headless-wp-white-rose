import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverSection({data}) {

    // if (!data || !data[0] || !data[0].acf) {
    //     return <p>Artist profile not available</p>; // Or render a "Not Found" component
    // }
    
    const { acf } = data[0];
    const covers = acf?.photo_gallery?.magazine_cover[0] || [];
    
    if (covers == '') {
        return null;
    }

  return (
    <div className='talent-cover-section talent-sections'>
        <div className="section-header">
            <h1>Cover</h1>
            <span className="section-border"></span>
        </div>
    
        <div className="talent-cover-list">
            {covers.map((cover) => (
                <div className="cover-card" key={cover.id}>
                    <div className="image-container">
                        <Image
                            src={cover.full_image_url}
                            alt={cover.title || "Magazine Cover"}
                            width={500}
                            height={650}
                        />
                    </div>
                    <span>{cover.title}</span>
                </div>
            ))}
        </div>
        
    </div>
  )
}
