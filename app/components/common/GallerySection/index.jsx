// "use client"

import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, FreeMode  } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/free-mode';
import Image from 'next/image';

export default function GallerySection({data}) {

    // if (!data || !data[0] || !data[0].acf) {
    //     return <p>Artist profile not available</p>; // Or render a "Not Found" component
    // }

    const { acf } = data[0];
    const gallery = acf?.photo_gallery?.gallery[1] || [];

    
    if (gallery === '') {
        return null;
    }

  return (
    <div className='talent-gallery-section talent-sections'>
        <div className="section-header">
            <h1>Gallery</h1>
            <span className="section-border"></span>
        </div>

        {/* Mind blowing at least for me 
        https://www.youtube.com/watch?v=x1qlKvJdHzI */}

        <div className="talent-gallery-list">
        {/* {gallery?.sort(() => 0.5 - Math.random()).map((gallery) => ( */}
            {gallery?.map((gallery) => (
                <Image
                    key={gallery.id}
                    src={gallery.full_image_url}
                    alt="Gallery Image"
                    width={1000}
                    height={300}
                    priority
                />
            ))}
        </div>
    </div>
  )
}

//OG
        // {/* <div className="athlete-gallery-list">
        //     {gallery.map((gallery) => (
        //         <div  key={gallery.id} className="image-container">
        //             <Image
        //                 src={gallery.full_image_url}
        //                 alt={"Magazine Cover"}
        //                 width={2000}
        //                 height={200}
        //                 // layout="responsive"
        //                 // objectFit="cover"
        //             />
        //         </div>
        //     ))}
        // </div> */}