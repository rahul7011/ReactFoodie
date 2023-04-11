module.exports = {
  //comment it see console.log statements
  // plugins: [["transform-remove-console", { exclude: ["error", "warn"] }]],
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }], //To suport import
    ["@babel/preset-react", { runtime: "automatic" }], //To support jsx
  ],
};
