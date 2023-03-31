const PDFDocument = require('pdfkit');

function buildPDF(req, dataCallback, endCallback) {
    const doc = new PDFDocument({ bufferPages: true, font: 'Courier', size: 'A6' });

    const office = req.body.office;
    const patient = req.body.patient;
    const doctor = req.body.doctor;
    const time = req.body.time;
    const service = req.body.service;
    const price = req.body.price;

    let col1LeftPos = 50;
    let colWidth = 100;
    let col2LeftPos = colWidth + col1LeftPos + 40;

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    doc
        .text('Office ' + office,
        {
            align: 'center'
        });

    doc
        .text('Time', col1LeftPos, 100, { width: colWidth })
        .text(time, col2LeftPos, 100, { width: colWidth });

    doc
        .text('Service', col1LeftPos, 150, { width: colWidth })
        .text(service, col2LeftPos, 150, { width: colWidth });

    doc
        .text('Doctor', col1LeftPos, 200, { width: colWidth })
        .text(doctor, col2LeftPos, 200, { width: colWidth });

    doc
        .text('Price', col1LeftPos, 250, { width: colWidth })
        .text(price, col2LeftPos, 250, { width: colWidth });

    doc
        .text('Patient', col1LeftPos, 300, { width: colWidth })
        .text(patient, col2LeftPos, 300, { width: colWidth });

    doc.end();
}

module.exports = { buildPDF };