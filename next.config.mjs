/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
            protocol: new URL(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000').protocol.replace(':', ''),
            hostname: new URL(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000').hostname,
            port: new URL(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000').port || '',
            pathname: '/media/products/**',
        },
    ],
  }
}

export default nextConfig
