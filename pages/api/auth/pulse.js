export default async function handler(req, res) {
    const data = {
        customer_num: 95508,
        attorney_docket_number: "SEQME.015",
    }
    res.status(200).json(data);
}