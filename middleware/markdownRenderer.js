const marked = require('marked');
const fs = require('fs');

const renderMarkdown = (filePath) => (req, res) => {
  fs.readFile(filePath, 'utf8', (err, fileContent) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading Markdown file');
    }
    const html = marked.parse(fileContent);
    res.render('page', { title: filePath, content: html });
  });
};

module.exports = {
  renderMarkdown
};
