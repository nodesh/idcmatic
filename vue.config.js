module.exports = {
  publicPath: './',
  lintOnSave: true,
  outputDir: 'lib',
  pages: {
    index: {
      entry: 'src/examples/index.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'IDC-UI'
    }
  }
};
