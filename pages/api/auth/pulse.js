export default async function handler(req, res) {
    const data = {
        customer_num: 95508,
        attorney_docket_number: "SEQME.015",
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(data);
}