import Image from "next/image";

export default function CoverSection({ data }) {
  const { acf } = data[0];
  const covers = acf?.photo_gallery?.magazine_cover[0] || [];

  if (covers == "") {
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
              />
            </div>
            <span>{cover.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
