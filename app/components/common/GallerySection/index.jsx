import Image from "next/image";

export default function GallerySection({ data }) {
  const { acf } = data[0];
  const gallery = acf?.photo_gallery?.gallery[1] || [];

  if (gallery === "") {
    return null;
  }

  return (
    <div className="talent-gallery-section talent-sections">
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
  );
}