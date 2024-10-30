import { Link } from "next-view-transitions";
import Image from "next/image";
import "@/app/styles/talentcards.css";

export default function TalentCards({ data, category }) {
  return (
    <div className="talent-card-list">
      {data
        .sort((a, b) => a.slug.localeCompare(b.slug))
        .map((talent, index) => (
          <Link href={`${category}/${talent.slug}`} key={index}>
            <div className="talent-card">
              <div className="card-filter">
                <h1>{talent.acf.fullname}</h1>
              </div>

              <Image
                src={
                  talent._embedded["wp:featuredmedia"][0]?.media_details?.sizes
                    ?.full.source_url
                }
                alt={talent.acf.fullname}
                width={500}
                height={500}
                quality={100}
                priority
              />
            </div>
          </Link>
        ))}
    </div>
  );
}