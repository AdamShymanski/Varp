module.exports = {
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  stories: ["../lib/**/*.stories.mdx", "../lib/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
