import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/layout/sections/hero";
import Latest from "./components/layout/sections/latest";
import Spotlight from "./components/layout/sections/spotlight";
import Contact from "./components/layout/sections/contact";
import Newsletter from "./components/layout/sections/newsletter";

export default function Home() {
  return (
  <main>
    <Hero />
    <Latest />
    <Spotlight />
    <Contact />
    <Newsletter />
  </main>
  );
}
