export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(data);
}

const data = [
    {
        "id": "f199a8d1-c24d-4749-9008-e9ef7f0bdbeb",
        "created_at": "2023-03-01T23:53:27.03439-08:00",
        "updated_at": "2023-03-01T23:53:27.03439-08:00",
        "patent_application_number": "16807146",
        "patent_number": "",
        "document_code": "CLM",
        "uspto_document_id": "LCJ36GJSMBLUEM4",
        "submission_date": "2023-01-04T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16807146/LCJ36GJSMBLUEM4.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Claims\"}"
    },
    {
        "id": "2567e187-ea8d-4c88-8dfe-a01dde610878",
        "created_at": "2023-03-01T23:53:28.035807-08:00",
        "updated_at": "2023-03-01T23:53:28.035807-08:00",
        "patent_application_number": "16807146",
        "patent_number": "",
        "document_code": "REM",
        "uspto_document_id": "LCJ36GJTMBLUEM4",
        "submission_date": "2023-01-04T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16807146/LCJ36GJTMBLUEM4.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Applicant Arguments/Remarks Made in an Amendment\"}"
    },
    {
        "id": "b1ba06df-3275-40ae-9241-6805f38a2680",
        "created_at": "2023-03-01T23:53:29.849444-08:00",
        "updated_at": "2023-03-01T23:53:29.849444-08:00",
        "patent_application_number": "16807146",
        "patent_number": "",
        "document_code": "CTFR",
        "uspto_document_id": "L9ZW9ZG5XBLUEX2",
        "submission_date": "2022-11-03T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16807146/L9ZW9ZG5XBLUEX2.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Final Rejection\"}"
    },
    {
        "id": "967f612e-e7b0-403f-a556-8f77721ca059",
        "created_at": "2023-03-01T23:53:30.646058-08:00",
        "updated_at": "2023-03-01T23:53:30.646058-08:00",
        "patent_application_number": "16807146",
        "patent_number": "",
        "document_code": "CLM",
        "uspto_document_id": "L81TO4YVGREENM0",
        "submission_date": "2022-09-13T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16807146/L81TO4YVGREENM0.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Claims\"}"
    },
    {
        "id": "cd80ef27-10da-4bfd-9b51-0e9bc800dede",
        "created_at": "2023-03-01T23:53:31.540309-08:00",
        "updated_at": "2023-03-01T23:53:31.540309-08:00",
        "patent_application_number": "16807146",
        "patent_number": "",
        "document_code": "REM",
        "uspto_document_id": "L81TO4YWGREENM0",
        "submission_date": "2022-09-13T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16807146/L81TO4YWGREENM0.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Applicant Arguments/Remarks Made in an Amendment\"}"
    },
    {
        "id": "b99ad166-a6a9-4f16-aebb-119289862c41",
        "created_at": "2023-03-01T23:53:33.852546-08:00",
        "updated_at": "2023-03-01T23:53:33.852546-08:00",
        "patent_application_number": "16807146",
        "patent_number": "",
        "document_code": "CTNF",
        "uspto_document_id": "KU2ZNJQSLDFLYX9",
        "submission_date": "2021-09-29T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16807146/KU2ZNJQSLDFLYX9.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Non-Final Rejection\"}"
    },
    {
        "id": "1ae2a92f-67d6-4cbb-a6a0-d7896675edd3",
        "created_at": "2023-03-01T23:53:35.127677-08:00",
        "updated_at": "2023-03-01T23:53:35.127677-08:00",
        "patent_application_number": "16807146",
        "patent_number": "",
        "document_code": "SPEC",
        "uspto_document_id": "K7BD722FRXEAPX5",
        "submission_date": "2020-03-02T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16807146/K7BD722FRXEAPX5.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Specification\"}"
    },
    {
        "id": "4725cc14-c4ec-4371-929c-87241a816d40",
        "created_at": "2023-03-01T23:53:35.871991-08:00",
        "updated_at": "2023-03-01T23:53:35.871991-08:00",
        "patent_application_number": "16807146",
        "patent_number": "",
        "document_code": "CLM",
        "uspto_document_id": "K7BD722HRXEAPX5",
        "submission_date": "2020-03-02T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16807146/K7BD722HRXEAPX5.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Claims\"}"
    },
    {
        "id": "53b9f6b2-169b-4c76-afe2-c3f19391be13",
        "created_at": "2023-03-01T23:53:37.660652-08:00",
        "updated_at": "2023-03-01T23:53:37.660652-08:00",
        "patent_application_number": "16807146",
        "patent_number": "",
        "document_code": "DRW",
        "uspto_document_id": "K7BD71ABRXEAPX2",
        "submission_date": "2020-03-02T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16807146/K7BD71ABRXEAPX2.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Drawings-only black and white line drawings\"}"
    }
]