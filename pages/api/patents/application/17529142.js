export default async function handler(req, res) {
    const data = {
        "created_at": "2022-09-09T21:56:35.162892-07:00",
        "updated_at": "2022-09-09T22:49:07.928843-07:00",
        "application_num": "17529142",
        "patent_num": null,
        "publication_num": "US 2022-0147877 A1",
        "customer_num": "95508",
        "docket_num": "DARAI.001.C1",
        "filing_date": "2021-11-17T00:00:00Z",
        "last_submission_date": "2022-09-09T00:00:00Z",
        "group_art_unit_num": "2122",
        "invention_subject_matter_category": "UTL",
        "national_stage_indicator": "N",
        "application_status_description_text": "Non Final Action Counted, Not Yet Mailed",
        "invention_title": "SYSTEM AND METHOD FOR AUTOMATIC BUILDING OF LEARNING MACHINES USING LEARNING MACHINES",
        "application_status_date": "",
        "application_type_category": "REGULAR",
        "examiner_number": ""
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(data);
}