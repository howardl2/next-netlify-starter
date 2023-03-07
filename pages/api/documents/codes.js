const data = {
    "ABST": "abstract",
    "CLM": "claims",
    "DRW": "drawings",
    "DRW.NONBW": "Drawings - other than black and white line drawings",
    "SPEC": "specification",
    "CTNF": "non - final rejection",
    "CTFR": "Final Rejection",
    "ABN": "abandonment",
    "REM": "applicant arguments / remarks",
    "A.PE": "preliminary amendment",
    "FOR": "foreign reference",
    "IDS": "info disclosure statement form",
    "CTEQ": "ex parte quayle action",
    "A.QU": "response after ex parte quayle action",
    "NOA": "notice of allowance and fees due",
    "NPL": "Non patent literature",
    "A…": "amendment / request for reconsideration - after non - final rejection",
    "RCEX": "request for continued examination",
    "EXIN": "examiner interview summary record",
    "INTRVIEW.APP": "applicant summary of interview with examiner",
    "ELC.": "response to election / restriction filed",
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(data);
}