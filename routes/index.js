const express = require('express');
const router = express.Router();

const { renderMarkdown } = require('../middleware/markdownRenderer.js');

const BASE_FILES_DIR = 'src/content';
router.get('/', renderMarkdown(`${BASE_FILES_DIR}/projects.md`));
router.get('/how-to/service', renderMarkdown(`${BASE_FILES_DIR}/how-to/service.md`));

module.exports = router;