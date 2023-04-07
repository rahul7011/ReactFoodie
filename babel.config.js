module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],  //To suport import
    ["@babel/preset-react", { runtime: "automatic" }],  //To support jsx
  ],
};
