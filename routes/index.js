const express = require('express');
const router = express.Router();

const { renderMarkdown } = require('../middleware/markdownRenderer.js');

const BASE_FILES_DIR = 'src/content';

router.get('/how-to/service', renderMarkdown(`${BASE_FILES_DIR}/how-to/service.md`));
router.get('/projects', renderMarkdown(`${BASE_FILES_DIR}/projects.md`));

module.exports = router;