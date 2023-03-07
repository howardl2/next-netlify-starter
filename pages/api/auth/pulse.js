export default async function handler(req, res) {
    const data = {
        customer_num: 95508,
        registration_num: 55665,
        attorney_docket_numbers: ["PPI.002", "DARAI.001.C1"],
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(data);
}