module.exports = {
  async redirects() {
    return [
      {
        source: "/:any*",
        destination: "https://campedersen.com/rip-rubberduck",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
