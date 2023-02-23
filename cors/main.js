function main() {
    console.log("cors-test")
    $().ready(function () {
        // var url = "https://inspiring-seahorse-4208bb.netlify.app/api/auth/verify"
        var url = "http://localhost:3000/api/auth/verify"
        // $.ajaxSetup({
        //     headers: {
        //         // "credentials": "include",
        //         "accept": "*/*",
        //         "cache-control": "no-cache",
        //     },

        // })

        $.get(url, function (data) {
            console.log(`${JSON.stringify(data)}`)
        })
    })
}