/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports.redirects = async () => {
  return [
    {
      source: '/',
      destination: '/projects',
      permanent: true,
    },
  ];
};
