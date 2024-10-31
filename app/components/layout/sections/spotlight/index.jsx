import Image from "next/image";
import "./talent.css";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import getBase64 from "@/app/lib/getLocalBase64";

async function getFeatured() {
  const res = await fetch(`${process.env.WP_URL}/featured?acf_format=standard`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Spotlight() {
  const data = await getFeatured();
  // const myBlurDataUrl = await getBase64(data[0]?.acf?.spotlight_image);
  

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
                  <Link
                    href={`/${(() => {
                      switch (featured.acf.page_link_second.post_type) {
                        case "athlete":
                          return "sports";
                        case "model":
                          return "fashion";
                        default:
                          return "entertainment";
                      }
                    })()}/${featured.acf.page_link_second.post_name}`}
                  >
                    Learn More
                  </Link>
                </span>
              </div>

            </div>
            <div className="image-container">
              
              <Image
                src={featured.acf.spotlight_image}
                alt="UYRK"
                width={2000}
                height={2000}
                quality={100}
                // placeholder="blur"
                // blurDataURL={myBlurDataUrl}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
