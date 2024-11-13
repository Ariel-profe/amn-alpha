/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {protocol: 'https',
      hostname: 'flowbite.s3.amazonaws.com'},
      {protocol: 'https',
      hostname: 'images.unsplash.com'},
    ],
  },
}

module.exports = nextConfig
