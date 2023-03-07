export default async function handler(req, res) {
    const data = {
        "created_at": "2023-03-01T23:53:23.579394-08:00",
        "updated_at": "2023-03-01T23:53:23.579394-08:00",
        "application_num": "16807146",
        "patent_num": null,
        "publication_num": "US 2020-0280041 A1",
        "customer_num": "95508",
        "docket_num": "PPI.002",
        "filing_date": "2020-03-02T00:00:00Z",
        "last_submission_date": "2023-03-01T00:00:00Z",
        "group_art_unit_num": "1723",
        "invention_subject_matter_category": "UTL",
        "national_stage_indicator": "N",
        "application_status_description_text": "Non Final Action Counted, Not Yet Mailed",
        "invention_title": "Stackable Battery Bussing System",
        "application_status_date": "",
        "application_type_category": "REGULAR",
        "examiner_number": ""
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(data);
}