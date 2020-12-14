const { APP_URL } = process.env;

module.exports = {
  rewrites() {
    return [
      // {
      //   source: "/app",
      //   destination: `${APP_URL}/app/index.html`,
      // },
      {
        source: "/:path*",
        destination: "/:path*"
      },
      {
        source: "/app/:path*",
        destination: `${APP_URL}/:path*`,
      },
    ];
  },
};
