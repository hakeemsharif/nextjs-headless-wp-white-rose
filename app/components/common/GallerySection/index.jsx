import Image from "next/image";
import getBase64 from "@/app/lib/getLocalBase64";

export default async function GallerySection({ data }) {
  const { acf } = data[0];
  //const gallery = acf?.photo_gallery?.gallery[1] || [];
  let gallery = acf?.photo_gallery?.gallery[1] || [];

  if (gallery === "") {
    return null;
  }

  // Generate blurDataURL for each cover image if not empty
  // ChatGPT Assist
  if (gallery !== "") {
    gallery = await Promise.all(
      gallery.map(async (gallery) => ({
        ...gallery,
        blurDataURL: await getBase64(gallery.full_image_url),
      }))
    );
  } else {
    return null;
  }

  return (
    <div className="talent-gallery-section talent-sections">
      <div className="section-header">
        <h1>Gallery</h1>
        <span className="section-border"></span>
      </div>

      {/* Mind blowing guide at least for me 
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
            placeholder="blur"
            blurDataURL={gallery?.blurDataURL}
          />
        ))}
      </div>
    </div>
  );
}