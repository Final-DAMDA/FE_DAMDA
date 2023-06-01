/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    //외부 이미지 사용 설정
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/kakaoApi/:path*',
        destination: 'https://kauth.kakao.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
