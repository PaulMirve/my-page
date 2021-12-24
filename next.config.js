/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.jsdelivr.net"
    ]
  },
  env: {
    FIREBASE_STORAGE_URL: process.env.FIREBASE_STORAGE_URL
  }
}
