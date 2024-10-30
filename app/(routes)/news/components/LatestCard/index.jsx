import React from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import "./latestcard.css";
export default function LatestCard({ data }) {
  return (
    <>
      {data
        .slice(0, 1)
        .sort((a, b) => b.id - a.id)
        .map((news) => (
          <Link href={`/news/${news.slug}`} key={news.id}>
            <div className="latest-card">
              <div className="image-container">
                <Image
                  src={news._embedded["wp:featuredmedia"][0].source_url}
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${news.excerpt.rendered.slice(0, 300)}...`,
                  }}
                />
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}