/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'PHPCircus',
    description: 'PHPCircus Kasm Workspaces.',
    icon: ' https://phpcircus.github.io/kasm-registry/1.0/phpcircus_black_on_transparent.png',
    listUrl: 'https://phpcircus.github.io/kasm-registry/1.0/',
    contactUrl: 'https://github.com/phpcircus/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
