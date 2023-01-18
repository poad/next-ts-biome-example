const withBundleAnalyzer = require('@next/bundle-analyzer');

const config = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(
  /** @type {import('next').NextConfig} */
  {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    swcMinify: true,
    images: {
      unoptimized: true,
    },
    cleanDistDir: true,
    compiler: {
      emotion: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    productionBrowserSourceMaps: true,
  }
);

module.exports = config;
