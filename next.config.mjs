/** @type {import('next').NextConfig} */

const url = new URL(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000')

const nextConfig = {
    images: {
      remotePatterns: [
        {
            protocol: url.protocol.replace(':', ''),
            hostname: url.hostname,
            port: url.port || '',
            pathname: '/media/products/**',
        },
    ],
  }
}

export default nextConfig
