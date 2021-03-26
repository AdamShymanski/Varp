const path = require("path");
const fs = require("fs");

const rewireBabelLoader = require("craco-babel-loader");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  // Babel configuration required for emotion styling
  babel: {
    plugins: [
      "babel-plugin-macros",
      [
        "@emotion/babel-plugin-jsx-pragmatic",
        {
          export: "jsx",
          import: "__cssprop",
          module: "@emotion/react"
        }
      ],
      [
        "@babel/plugin-transform-react-jsx",
        {
          pragma: "__cssprop",
          pragmaFrag: "React.Fragment"
        }
      ]
    ]
  },
  eslint: {
    enable: false
  },
  // Allows importing of jsx components from ui package
  plugins: [
    {
      plugin: rewireBabelLoader,
      options: {
        includes: [resolveApp("../ui")]
      }
    }
  ],
  // Change the build directory
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve("dist");
      return webpackConfig;
    }
  }
};
