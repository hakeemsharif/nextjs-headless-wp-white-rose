import React from "react";
import Image from "next/image";
import Link from "next/link";

// assets
import fbicon from "@/app/assets/icons/fb.png";
import igicon from "@/app/assets/icons/ig.png";
import xicon from "@/app/assets/icons/x.png";
import yticon from "@/app/assets/icons/yt.png";
import spotifyicon from "@/app/assets/icons/spotify.png";
// assets

export default function TalentProfileSection({ data }) {
  const { acf } = data[0];

  const socialLinks = [
    { url: acf?.twitter, icon: xicon, alt: "Twitter" },
    { url: acf?.instagram, icon: igicon, alt: "Instagram" },
    { url: acf?.facebook, icon: fbicon, alt: "Facebook" },
    { url: acf?.youtube, icon: yticon, alt: "YouTube" },
    { url: acf?.spotify, icon: spotifyicon, alt: "Spotify" },
  ];

  return (
    <div className="talent-profile-section talent-sections">
      <div className="talent-image">
        <Image
          src={data[0]._embedded["wp:featuredmedia"][0].source_url}
          alt={data[0].acf.fullname}
          width={500}
          height={500}
          quality={100}
          priority
        />
      </div>

      <div className="talent-info">
        <div className="talent-header">
          <h1>{data[0].acf.fullname}</h1>
          <div className="social-links">
            {socialLinks.map(
              (link, index) =>
                link.url && (
                  <Link href={link.url} target="_blank" key={index}>
                    <Image
                      src={link.icon}
                      alt={link.alt}
                      width={30}
                      quality={100}
                    />
                  </Link>
                )
            )}
          </div>
        </div>

        <div className="talent-details">
          <div className="container">
            <span>Born</span>
            <h3>{data[0].acf.dateofbirth}</h3>
          </div>

          <div className="container">
            <span>Hometown</span>
            <h3>{data[0].acf.hometown}</h3>
          </div>

          <div className="container">
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: `${data[0].acf.biography.replace(/\r\n/g, "<br />")}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
