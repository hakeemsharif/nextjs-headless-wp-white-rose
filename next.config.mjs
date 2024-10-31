import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "localhost",
            port: "",
          },
          {
            protocol: "http",
            hostname: "white-rose.local",
            port: "",
          },
          {
            protocol: "https",
            hostname: process.env.HOST_WP_URL,
            port: "",
          },
        ],
      },
};

export default withNextVideo(nextConfig, { folder: 'assets/video' });