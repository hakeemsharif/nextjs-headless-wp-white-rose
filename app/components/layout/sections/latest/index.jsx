import Image from "next/image";
import "./latest.css";
import "@/app/styles/newscard.css";
import { Link } from "next-view-transitions";
import getBase64 from "@/app/lib/getLocalBase64";

async function getLatestData() {
  const res = await fetch(`${process.env.WP_URL}/posts?&_embed=true`, {
    next: {
      revalidate: 60, // 60 seconds
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // const data = await res.json();

  // Map through the data to add blur data URL to each item
  // AI ASSIST
  // for (const post of data) {
  //   const imageUrl = post._embedded["wp:featuredmedia"][0].source_url;
  //   post.blurDataURL = await getBase64(imageUrl);
  // }

  // return data;
  
}

export default async function Latest() {
  const data = await getLatestData();

  return (
    <section>
      <div className="latest-section">
        <div className="section-header">
          <h1>Latest</h1>
          <span className="section-border"></span>
        </div>

        <div className="latest-card-list">
          {data
            .sort((a, b) => b.id - a.id)
            .slice(0, 4)
            .map((news) => (
              
              <Link href={`/news/${news.slug}`} key={news.id}>
                <div className="news-card">
                  <div className="image-container">
                    <Image
                      src={news._embedded["wp:featuredmedia"][0].source_url}
                      alt={news.title.rendered}
                      width={1000}
                      height={400}
                      quality={100}
                      // placeholder="blur"
                      // blurDataURL={news.blurDataURL}
                    />
                  </div>

                  <div className="news-content">
                    <span>{news.acf.category_acf}</span>
                    <h1>{news.title.rendered}</h1>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
