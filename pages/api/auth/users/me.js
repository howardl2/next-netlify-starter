export default async function handler(req, res) {
    const data = {
        id: "1d1cf219-44a1-45dd-9e96-367371b83604",
        email: "howard.sn01@gmail.com",
        customer_id: "f298a7e6fa2048dead4022574afea355",
        attorney_docket_numbers: ["PPI.002", "DARAI.001.C1"],
        customer_num: 95508,
        registration_num: 55665,
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(data);
}