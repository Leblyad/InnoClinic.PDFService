'use strict';
var express = require('express');
var router = express.Router();
const pdfService = require('../service/pdf-service');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/invoice', (req, res, next) => {
    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment;filename=invoice.pdf`,
    });
    pdfService.buildPDF( req,
        (chunk) => stream.write(chunk),
        () => stream.end()
    );
});

module.exports = router;
