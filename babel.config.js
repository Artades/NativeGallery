module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".j" +
          "sx", ".js", ".json"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};