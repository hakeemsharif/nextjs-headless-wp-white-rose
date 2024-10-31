import Image from "next/image";
import getBase64 from "@/app/lib/getLocalBase64";

export default async function CoverSection({ data }) {
  const { acf } = data[0];
  // const covers = acf?.photo_gallery?.magazine_cover[0] || [];
  let covers = acf?.photo_gallery?.magazine_cover[0] || [];

  if (covers == "") {
    return null;
  }

  // Generate blurDataURL for each cover image if not empty
  // ChatGPT Assist
  if (covers !== "") {
    covers = await Promise.all(
      covers.map(async (cover) => ({
        ...cover,
        blurDataURL: await getBase64(cover.full_image_url),
      }))
    );
  } else {
    return null;
  }

  return (
    <div className="talent-cover-section talent-sections">
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
                placeholder="blur"
                blurDataURL={cover?.blurDataURL}
              />
            </div>
            <span>{cover.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
