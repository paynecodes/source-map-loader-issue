module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      enforce: "pre",
      use: ["source-map-loader"],
    });
    config.ignoreWarnings = [/Failed to parse source map/];

    return config;
  },
};
