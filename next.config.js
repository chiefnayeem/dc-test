module.exports = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,

  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
}
