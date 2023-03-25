import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'public', '95508_16807146_09-29-2021_CTNF.PDF')
    fs.readFile(filePath, (err, data) => {
        if (err) {
            throw err;
        }

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Disposition');
        res.setHeader('Content-Disposition', 'attachment; filename="16807146/KU2ZNJQSLDFLYX9.PDF"');
        res.setHeader('Content-Type', 'application/pdf');
        res.send(data);
    });
}