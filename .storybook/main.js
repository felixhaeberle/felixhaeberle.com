module.exports = {
  // Point at your stories
  stories: ['../components/**/*.stories.mdx', 
            '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ]
}