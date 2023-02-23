export default async function handler(req, res) {
    const data = [
        {
            id: "2489d988-ab8e-4eef-b3e4-56f8119e7017",
            patent_application_number: "17529142",
            patent_number: null,
            document_code: "CTNF",
            uspto_document_id: "L807ZRP9GREENX0",
            submission_date: "2022-09-09T00:00:00Z",
            mime_type: "application/pdf",
            file_location: "file/path.pdf",
            processed: [],
        }
    ]
    res.status(200).json(data);
}