/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/uniswap',
        destination: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
      },
    ];
  },
};

module.exports = nextConfig;
