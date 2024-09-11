/** @type {import('next').NextConfig} */

let apiUrl

try {
  apiUrl = new URL(process.env.NEXT_PUBLIC_API_URL)
} catch (error) {
  console.error('Invalid API URL:', process.env.NEXT_PUBLIC_API_URL)
  apiUrl = new URL('http://localhost:8000')
}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: apiUrl.protocol.replace(':', ''),
        hostname: apiUrl.hostname,
        port: apiUrl.port || '',
        pathname: '/media/products/**',
      },
    ],
  }
}

export default nextConfig
