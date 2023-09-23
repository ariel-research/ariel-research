const marked = require('marked');
const fs = require('fs');
const debug = require("debug")("mdfile");

const renderMarkdown = (filePath) => (req, res) => {
  fs.readFile(filePath, 'utf8', (err, fileContent) => {
    if (err) {
      debug(`file ${filePath} not found`);
      console.error(err);
      return res.status(500).send('Error reading Markdown file');
    }
    const html = marked.parse(fileContent);
    res.render('page', { content: html });
  });
};

module.exports = {
  renderMarkdown
};
