export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(data);
}

const data = [
    {
        "id": "32983900-5104-40e6-8f5f-9ac22da8d36a",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "RCEX",
        "uspto_document_id": "LCTIKDREXBLUEX1",
        "submission_date": "2023-01-12T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/LCTIKDREXBLUEX1.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Request for Continued Examination (RCE)\"}"
    },
    {
        "id": "f6e68fd1-1269-4598-948f-8ab5c5ea93d6",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "CLM",
        "uspto_document_id": "LAIIOA9KMBLUEM2",
        "submission_date": "2022-11-14T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/LAIIOA9KMBLUEM2.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Claims\"}"
    },
    {
        "id": "64cdbab8-65f9-4bf7-8507-ba5f3968d80d",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "REM",
        "uspto_document_id": "LAIIOA9LMBLUEM2",
        "submission_date": "2022-11-14T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/LAIIOA9LMBLUEM2.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Applicant Arguments/Remarks Made in an Amendment\"}"
    },
    {
        "id": "5c4a3789-f96e-44c2-b046-b668088893b2",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "CTFR",
        "uspto_document_id": "L7T6HMLWXBLUEX4",
        "submission_date": "2022-09-11T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/L7T6HMLWXBLUEX4.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Final Rejection\"}"
    },
    {
        "id": "5cd11b5c-0e61-4765-ba36-008a13284b15",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "CLM",
        "uspto_document_id": "L6MJHKD7MBLUEM4",
        "submission_date": "2022-08-15T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/L6MJHKD7MBLUEM4.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Claims\"}"
    },
    {
        "id": "397012f7-2d9c-4a90-9233-69e62f46f71b",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "REM",
        "uspto_document_id": "L6MJHKD8MBLUEM4",
        "submission_date": "2022-08-15T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/L6MJHKD8MBLUEM4.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Applicant Arguments/Remarks Made in an Amendment\"}"
    },
    {
        "id": "1f7e5999-0477-4e12-9e07-3c2d425797d5",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "CTNF",
        "uspto_document_id": "L0MTAXX1XBLUEX3",
        "submission_date": "2022-03-15T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/L0MTAXX1XBLUEX3.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Non-Final Rejection\"}"
    },
    {
        "id": "a24a512f-8fb2-4cff-8f60-2764dcfb52ee",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "NPL",
        "uspto_document_id": "L0MTAXX5XBLUEX3",
        "submission_date": "2022-03-15T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/L0MTAXX5XBLUEX3.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Non Patent Literature\"}"
    },
    {
        "id": "9c38161b-0b37-4913-bcb8-1f654ed04421",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "NPL",
        "uspto_document_id": "L0MTAXX7XBLUEX3",
        "submission_date": "2022-03-15T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/L0MTAXX7XBLUEX3.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Non Patent Literature\"}"
    },
    {
        "id": "68fd1deb-53a0-47ef-8e17-af67b0b29191",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "NPL",
        "uspto_document_id": "L0MTAXXBXBLUEX3",
        "submission_date": "2022-03-15T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/L0MTAXXBXBLUEX3.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Non Patent Literature\"}"
    },
    {
        "id": "28609c20-f918-4acc-9553-e6b11e977340",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "NPL",
        "uspto_document_id": "L0MTAXXEXBLUEX3",
        "submission_date": "2022-03-15T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/L0MTAXXEXBLUEX3.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Non Patent Literature\"}"
    },
    {
        "id": "114d21d5-595a-4a3e-83ec-084bc0d55967",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "IDS",
        "uspto_document_id": "KSJC7H0NLDFLYX7",
        "submission_date": "2021-08-19T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/KSJC7H0NLDFLYX7.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Information Disclosure Statement (IDS) Form (SB08)\"}"
    },
    {
        "id": "6caadc9a-a902-42bc-a8c4-60ce206996e0",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "DRW.NONBW",
        "uspto_document_id": "JT08IH7PRXEAPX1",
        "submission_date": "2019-02-26T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/JT08IH7PRXEAPX1.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Drawings-other than black and white line drawings\"}"
    },
    {
        "id": "9bc0b775-302c-44fd-aac8-70e8bd2782c6",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "IDS",
        "uspto_document_id": "JNXUIBYZRXEAPX3",
        "submission_date": "2018-10-31T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/JNXUIBYZRXEAPX3.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Information Disclosure Statement (IDS) Form (SB08)\"}"
    },
    {
        "id": "593dc8e0-ff4f-48f0-ba1d-b949f7f3be2c",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "ABST",
        "uspto_document_id": "JNXUIBZ3RXEAPX3",
        "submission_date": "2018-10-31T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/JNXUIBZ3RXEAPX3.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Abstract\"}"
    },
    {
        "id": "bc067143-f3bd-4e0e-9359-576380f4872a",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "CLM",
        "uspto_document_id": "JNXUIBZ4RXEAPX3",
        "submission_date": "2018-10-31T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/JNXUIBZ4RXEAPX3.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Claims\"}"
    },
    {
        "id": "be05a1dc-86e3-4c7c-bed3-0cb798fefe69",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "SPEC",
        "uspto_document_id": "JNXUIBZ5RXEAPX3",
        "submission_date": "2018-10-31T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/JNXUIBZ5RXEAPX3.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Specification\"}"
    },
    {
        "id": "544628ca-fe38-4563-8a5d-9af6a5d3f607",
        "patent_application_number": "17529142",
        "patent_number": "",
        "document_code": "DRW.NONBW",
        "uspto_document_id": "JNXUIBZ6RXEAPX3",
        "submission_date": "2018-10-31T00:00:00Z",
        "mime_type": "application/pdf",
        "file_location": "{\"bucket\":\"patents-applications-documents\",\"key\":\"16177282/JNXUIBZ6RXEAPX3.PDF\",\"mime_type\":\"PDF\",\"file_description\":\"Drawings-other than black and white line drawings\"}"
    }
]