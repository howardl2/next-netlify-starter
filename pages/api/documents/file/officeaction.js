import nextConnect from 'next-connect';
import fs from 'fs';
import path from 'path';


export default nextConnect().get((req, res) => {
    // Set the file path and name
    const fileName = '95508_17529142_09-14-2022_CTNF.PDF';

    const filePath = path.join(__dirname, fileName);
    // const filePath = "/favicon.ico"

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            res.status(404).end();
            return;
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', 'application/pdf');
        res.send(data);
    });

    // // Send the file as a response
    // res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    // res.setHeader('Content-Type', 'application/pdf');
    // try {
    //     res.sendFile(filePath);
    // } catch (err) {
    //     console.error(err)
    // }
});