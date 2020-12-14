const { APP_URL } = process.env;

module.exports = {
  rewrites() {
    return [
      {
        source: "/app",
        destination: `${APP_URL}/app/index.html`,
      },
      {
        source: "/app/:path*",
        destination: `${APP_URL}/app/:path*`,
      },
    ];
  },
};
