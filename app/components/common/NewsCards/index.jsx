import React from 'react'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import '@/app/styles/newscard.css'

export default function NewsCards({data}) {
  return (
    <div className="latest-card-list">
        {data.sort((a, b) => b.id - a.id).slice(1).map((news) => (
            <div className="news-card" key={news.id}>
                <Link href={`/news/${news.slug}`}>
                    <div className="image-container">
                        <Image
                            src={news._embedded['wp:featuredmedia'][0].source_url}
                            alt={news.title.rendered}
                            width={1000}
                            height={400}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="news-content">
                        <span>{news.acf.category_acf}</span>
                        <h1>{news.title.rendered}</h1>
                    </div>
                </Link>
            </div>
        ))}        
    </div>
  )
}
