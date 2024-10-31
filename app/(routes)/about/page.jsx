import React from "react";
import "./aboutpage.css";
import getBase64 from "@/app/lib/getLocalBase64";
import Image from "next/image";

export default async function AboutPage() {
  const res = await fetch(`${process.env.WP_URL}/pages/80?acf_format=standard`);

  const data = await res.json();
  const { acf } = data;

  // Hardcoded for now
  const founderOne = await getBase64(acf.founder_one_image);
  const founderTwo = await getBase64(acf.second_founder_image);
  
  return (
    <section className="group-section">
      <title>White Rose | About</title>

      <div className="section-header">
        <h1>About</h1>
        <span className="section-border"></span>
      </div>

      <div className="about-section">
        <h1>{acf.tagline}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: `${acf.about.replace(/\r\n/g, "<br />")}`,
          }}
        />
      </div>

      <div className="section-header">
        <h1>Co-founders</h1>
        <span className="section-border"></span>
      </div>

      <div className="about-section">
        <div className="founder-card-list">
          <div className="founder-card">
            <div className="card-filter">
              <h1>{acf.founder_one}</h1>
              <span>{acf.founder_one_title}</span>
            </div>

            <Image
              src={acf.founder_one_image}
              alt={acf.founder_one}
              width={1000}
              height={500}
              quality={100}
              placeholder="blur"
              blurDataURL={founderOne}
            />
          </div>

          <div className="founder-card">
            <div className="card-filter">
              <h1>{acf.second_founder_name}</h1>
              <span>{acf.second_founder_title}</span>
            </div>

            <Image
              src={acf.second_founder_image}
              alt={acf.second_founder_name}
              width={1000}
              height={500}
              quality={100}
              placeholder="blur"
              blurDataURL={founderTwo}
            />
          </div>
        </div>
      </div>

      <div className="section-header">
        <h1>What we do</h1>
        <span className="section-border"></span>
      </div>

      <div className="about-section">
        <div className="sports-card cards">
          <h2>Sports</h2>
          <p>{acf.sports_about}</p>
        </div>

        <div className="entertainment-card cards">
          <h2>Entertainment</h2>
          <p>{acf.sports_about}</p>
        </div>

        <div className="fashion-card cards">
          <h2>Fashion</h2>
          <p>{acf.sports_about}</p>
        </div>
      </div>
    </section>
  );
}